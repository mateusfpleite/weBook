import Link from 'next/link';

function BookCard({ id, thumbnail, title, author, bestSeller}) {
  return (
    <Link href={`/books/${id}`}> 
    <a>
      <figure>
        <img
          src={
            thumbnail || 'https://tinyurl.com/36ys7v4w'
          }
          style={{ maxWidth: '128px', height: '170px' }}
          alt={'book-cover'}
        />
       {!bestSeller ? 
       <figcaption>{`${title} - ${author.join(
          ', '
        )}`}
       </figcaption>
        : <figcaption>
          {`${volumeInfo.title} - ${volumeInfo.author}`}
        </figcaption>
        }
      </figure>
      </a>
      </Link>
  );
}

export default BookCard;