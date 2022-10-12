import Link from 'next/link';

function BookCard({ id, thumbnail, title, author, bestSeller}) {
  const route = bestSeller ? `/books/isbn:${id}` : `/books/${id}`;
  return (
    <Link href={route} passHref={true}> 
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
          {`${title} - ${author}`}
        </figcaption>
        }
      </figure>
      </a>
      </Link>
  );
}

export default BookCard;