import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import isoConv from 'iso-language-converter';
import { useEffect, useRef, useState } from 'react';
import supabase from '../../utils/supabaseClient';
import { Collapse } from '@mui/material';

function BookDetailsCard({ book }) {
  const [shelves, setShelves] = useState({
    wantToRead: false,
    reading: false,
    read: false,
  });
  const [selectedShelf, selectShelf] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const didMount = useRef(false);

  useEffect(() => {
    async function updateShelves() {
      const loggedUser = Number(JSON.parse(localStorage.getItem('loggedUser'))) || 0;
      const { data } = await supabase.from('books').select('*').eq('book_id', book.id);
      const { data: userBook } = await supabase.from('users_books').select('*').match({ book_id: book.id, user_id: loggedUser });
      if (!(data.length)) {
        await supabase
          .from('books')
          .insert([
            { book_id: book.id, title, book_picture: bookImg },
          ]);
      }
      if (selectedShelf) {
        if (!(userBook.length)) {
          await supabase
            .from('users_books')
            .insert([
              { book_id: book.id, user_id: loggedUser, status: selectedShelf, favorite: isFavorite },
            ]);
        } else {
          await supabase
            .from('users_books')
            .update({ status: selectedShelf, favorite: isFavorite })
            .match({ book_id: book.id, user_id: loggedUser });
        }
      }
      if (!selectedShelf) {
        userBook.length
          ? await supabase
            .from('users_books')
            .update({ favorite: isFavorite })
            .match({ book_id: book.id, user_id: loggedUser })
          : await supabase
            .from('users_books')
            .insert([
              { book_id: book.id, user_id: loggedUser, status: selectedShelf, favorite: isFavorite }]);
      }
    }
    if (didMount.current) updateShelves();
    else didMount.current = true;
  }, [selectedShelf, isFavorite])

  const {
    pageCount,
    authors,
    canonicalVolumeLink,
    publishedDate,
    previewLink,
    title,
    subTitle,
    publisher,
    language,
    description,
    imageLinks,
  } = book.volumeInfo;

  const bookImg = imageLinks?.thumbnail || 'https://tinyurl.com/36ys7v4w';

  const handleChange = async ({ target }) => {
    setShelves({ ...shelves, [target.name]: !(shelves[target.name]) });
    if (target.name === 'reading') {
      setShelves({ ...shelves, wantToRead: false, read: false, reading: !(shelves.reading) });
    }
    if (target.name === 'wantToRead') {
      setShelves({ ...shelves, reading: false, read: false, wantToRead: !(shelves.wantToRead) });
    }
    if (target.name === 'read') {
      setShelves({ ...shelves, reading: false, wantToRead: false, read: !(shelves.read) });
    }
    if (target.checked) selectShelf(target.name);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <h3>Authors: {authors?.join(', ') || "No author specified"}</h3>
      <h3>Language: {isoConv(language)}</h3>
      <img
        style={{ maxWidth: '128px', height: '170px' }}
        src={bookImg}
        alt="" />
      <div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={isFavorite}
                onChange={() => setFavorite(!isFavorite)}
              />
            }
            label="Favorite book"
          />
          <FormControlLabel
            control={
              <Switch
                name='wantToRead'
                checked={shelves.wantToRead}
                onChange={handleChange}
              />
            }
            label="Want to Read"
          />
          <FormControlLabel
            control={
              <Switch
                name='reading'
                checked={shelves.reading}
                onChange={handleChange}
              />
            }
            label="Reading"
          />
          <FormControlLabel
            control={
              <Switch
                name='read'
                checked={shelves.read}
                onChange={handleChange}
              />
            }
            label="Read"
          />
        </FormGroup>
        {description ? <p dangerouslySetInnerHTML={{ __html: description }} /> : <p>No description avaliable</p>}
        <p>Number of pages: {pageCount}</p>
        <p>Published: {publishedDate}</p>
        <p>Publisher: {publisher}</p>
        <p><a href={previewLink} target="_blank">Google Books Preview</a></p>
        <a href={canonicalVolumeLink} target="_blank">Buy it on Playstore!</a>
      </div>
    </div>
  )
}

export default BookDetailsCard;
