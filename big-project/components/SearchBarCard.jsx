import Link from "next/link";

function SearchBarCard({ id, volumeInfo }, query) {
  console.log(query)
  return (
    <>
      <Link href={`/books/${id}`} key={id}>
        <a>
          <div style={{ position: 'relative', backgroundColor: 'white', border: '1px solid black' }}>
            <img
              src={volumeInfo.imageLinks?.thumbnail || 'https://tinyurl.com/36ys7v4w'}
              style={{ width: '40px' }}
            />
            <span>{volumeInfo.title}</span>
          </div>
        </a>
      </Link>
    </>
  )
}

export default SearchBarCard;