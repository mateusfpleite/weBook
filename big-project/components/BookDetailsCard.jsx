import isoConv from 'iso-language-converter';

function BookDetailsCard({ book }) {
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
    imageLinks: { thumbnail },
  } = book.volumeInfo;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <h3>Authors: {authors.join(', ')}</h3>
      <h3>Language: {isoConv(language)}</h3>
      <img src={thumbnail} alt="" />
      <div>
        { description ? <p>{description}</p> : <p>No description avaliable</p> }
        <p>Number of pages: {pageCount}</p>
        <p>Published: {publishedDate}</p>
        <p>Publisher: {publisher}</p>
      </div>
      <a href={previewLink}>Preview Link</a>
      <a href={canonicalVolumeLink}>Leia online!</a>
    </div>
  )
}

export default BookDetailsCard;
