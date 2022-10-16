import { FormControl, MenuItem, Select } from '@mui/material';
import isoConv from 'iso-language-converter';
import { useState } from 'react';
import supabase from '../../utils/supabaseClient';

const shelves = ['favorite_books', 'is_reading', 'want_to_read', 'already_read' ];


function BookDetailsCard({ book }) {
  const [selectedShelf, setShelf] = useState('want_to_read');
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

  const favoriteBook = async ({target}) => {
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  await supabase
    .from('books')
    .insert([
      { book_id: book.id, title, book_picture: bookImg },
    ]);
     await supabase
    .from(target.value)
    .insert([
      { book_id: book.id, user_id: +loggedUser },
    ]);
  }

 
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
        { description ? <p dangerouslySetInnerHTML={{__html: description }} /> : <p>No description avaliable</p> }

        <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
        </Select>
      </FormControl>
        <button type="button" onClick= {favoriteBook}>Favorite book</button>
        <p>Number of pages: {pageCount}</p>
        <p>Published: {publishedDate}</p>
        <p>Publisher: {publisher}</p>
      </div>
      <p><a href={previewLink} target="_blank">Google Books Preview</a></p>
      <a href={canonicalVolumeLink} target="_blank">Buy it on Playstore!</a>
    </div>
  )
}

export default BookDetailsCard;
