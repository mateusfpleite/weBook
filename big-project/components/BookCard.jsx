function BookCard({ book }) {
    const {volumeInfo} = book;
  return (
      <figure>
        <img
          src={
            volumeInfo?.imageLinks?.thumbnail || 'https://tinyurl.com/36ys7v4w'
          }
          style={{ maxWidth: '128px', height: '170px' }}
          alt={'book-cover'}
        />
        <figcaption>{`${volumeInfo.title} - ${volumeInfo.authors?.join(
          ', '
        )}`}</figcaption>
      </figure>
  );
}

export default BookCard;