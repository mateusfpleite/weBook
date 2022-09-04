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
    imageLinks,
  } = book.volumeInfo;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <h3>Authors: {authors?.join(', ') || "No author specified"}</h3>
      <h3>Language: {isoConv(language)}</h3>
      <img 
      style={{ maxWidth: '128px', height: '170px' }}
      src={imageLinks?.thumbnail || 'https://tinyurl.com/36ys7v4w'}
       alt="" />
      <div>
        { description ? <p dangerouslySetInnerHTML={{__html: description }} /> : <p>No description avaliable</p> }
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
