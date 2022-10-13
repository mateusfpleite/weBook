import axios from 'axios';
// import BookCard from '../../components/BookCard/BookCard';
import FacebookLogin from 'react-facebook-login';
import BookCard from '../../components/BookCard/BookCard';
import Header from '../../components/Header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home({ fictionBooks, nonFictionBooks }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    }
  }
  function responseFacebook(response) {
  }
  return (
    <>
      <h1>You are in the home page!</h1>
      <Header />
      <h2>Month Bestsellers - Fiction</h2>
      <Carousel  
  showDots={true}
  responsive={responsive}
  ssr={true}
  infinite={true}
  autoPlay={false}
  transitionDuration={500}
  itemClass="carousel-item-padding-40-px">
      {fictionBooks.map((book) => (
        <div key={book.primary_isbn10} style={{ maxWidth: '100%', height: '250px' }}>
      {/* <div style={{display: 'flex', flexFlow: 'row wrap'}}> */}
        <BookCard
        id={book.primary_isbn10}
        thumbnail={book.book_image}
        title={book.title}
        author={book.author}
        bestSeller={true} />
        </div>
      ) )}
      </Carousel>
      <h2> Month Bestsellers - Non-Fiction</h2>
      <Carousel 
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={false}
      transitionDuration={500}
      itemClass="carousel-item-padding-40-px">
      {nonFictionBooks.map((book) => (
        <div key={book.primary_isbn10} style={{ maxWidth: '100%', height: '250px' }}>
        <BookCard
        id={book.primary_isbn10}
        thumbnail={book.book_image}
        title={book.title}
        author={book.author}
        bestSeller={true} />
        </div>
      ) )}
      </Carousel>
      {/* </div> */}
      {/* <FacebookLogin
    appId="1250954195759976"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
   /> */}
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const fictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Rgr3HfLslGy1GfH6kyKNNIuqrAO5G0Ij';
  const nonFictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=Rgr3HfLslGy1GfH6kyKNNIuqrAO5G0Ij'
  const {data: {results: {books: fictionBooks }}} = await axios.get(fictionURL);
  const {data: {results: {books: nonFictionBooks }}} = await axios.get(nonFictionURL);

  return {
    props: {
      fictionBooks,
      nonFictionBooks
    }
  }
}