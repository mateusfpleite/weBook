import axios from 'axios';
import BookCard from '../../components/BookCard';
import SearchBar from '../../components/SearchBar';

function Home({ books }) {
  return (
    <>
      <h1>You are in the home page!</h1>
      <SearchBar />
      
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