import axios from 'axios';
import useGenericState from '../../../hooks/useGenericState';
import BookCard from '../../components/BookCard';

function Home({ books }) {
  const INITIAL_STATE = { searchBar: '' };
  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);
  return (
    <>
      <h1>You are in the home page!</h1>
      <header>
        <label htmlFor="searchBar">
          <input
            placeholder="Type to search..."
            type="text"
            id="searchBar"
            name="searchBar"
            value={genericState.searchBar}
            onChange={setGenericState}
          />
        </label>
      </header>
      {books.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const URL = 'https://www.googleapis.com/books/v1/volumes?q=%22%22&maxResults=40&langRestrict=en';
  const { data } = await axios.get(URL);
  return {
    props: {
      books: data.items,
    }
  }
}