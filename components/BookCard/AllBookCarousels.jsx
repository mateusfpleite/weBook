import BookCarousel from "./BookCarousel";
import BookCard from './BookCard';

function AllBookCarousel({ fictionBooks, nonFictionBooks }) {
  return (
    <>
      <h2>Month Bestsellers - Fiction</h2>
      <BookCarousel>
        {fictionBooks.map((book) => (
          <div key={book.primary_isbn10} style={{ maxWidth: '100%', height: '250px' }}>
            <BookCard
              id={book.primary_isbn10}
              thumbnail={book.book_image}
              title={book.title}
              author={book.author}
              bestSeller={true} />
          </div>
        ))}
      </BookCarousel>
      <h2> Month Bestsellers - Nonfiction</h2>
      <BookCarousel>
        {nonFictionBooks.map((book) => (
          <div key={book.primary_isbn10} style={{ maxWidth: '100%', height: '250px' }}>
            <BookCard
              id={book.primary_isbn10}
              thumbnail={book.book_image}
              title={book.title}
              author={book.author}
              bestSeller={true} />
          </div>
        ))}
      </BookCarousel>
    </>
  );
}

export default AllBookCarousel;