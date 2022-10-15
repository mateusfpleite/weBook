import axios from 'axios';
import Header from '../components/Header';
import 'react-multi-carousel/lib/styles.css';
import AllBookCarousel from '../components/BookCard/AllBookCarousels';

function Home({ fictionBooks, nonFictionBooks }) {

  return (
    <>
      <h1>You are in the home page!</h1>
      <Header />
      <AllBookCarousel fictionBooks={fictionBooks} nonFictionBooks={nonFictionBooks}/>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const fictionURL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NYTAPI_KEY}`;
  const nonFictionURL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${process.env.NYTAPI_KEY}`;
  const { data: { results: { books: fictionBooks } } } = await axios.get(fictionURL);
  const { data: { results: { books: nonFictionBooks } } } = await axios.get(nonFictionURL);

  return {
    props: {
      fictionBooks,
      nonFictionBooks
    }
  }
}