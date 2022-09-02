import Link from 'next/link';

function BookCard({ book }) {
    const {volumeInfo, id} = book;
  return (
    <Link href={`/books/${id}`}> 
    <a>
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
      </a>
      </Link>
  );
}

export default BookCard;