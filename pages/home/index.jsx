import axios from 'axios';
// import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import FacebookLogin from 'react-facebook-login';
function Home() {
 function responseFacebook (response) {
  console.log(response)
 }
  return (
    <>
      <h1>You are in the home page!</h1>
      <SearchBar />
      <FacebookLogin
    appId="1250954195759976"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
   />
    </>
  )
}

export default Home;

// export async function getStaticProps() {
//   const URL = 'https://www.googleapis.com/books/v1/volumes?q=%22%22&maxResults=40&langRestrict=en';
//   const { data } = await axios.get(URL);
//   return {
//     props: {
//       books: data.items,
//     }
//   }
// }