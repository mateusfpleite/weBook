import axios from "axios";
import { useRouter } from 'next/router';
import BookDetailsCard from '../../components/BookCard/BookDetailsCard';

function BookDetails({ data }) {
  const router = useRouter();

  if (router.isFallback) return <h1></h1>

  return (
    <div>
      <BookDetailsCard book={ data }/>
    </div>
  )
}

export default BookDetails;

export async function getStaticPaths() {
  return {
    paths: [
      { params: {bookId: 'zyTCAlFPjgYC'} }
    ],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const URL = `https://www.googleapis.com/books/v1/volumes/${params.bookId}`;
  let data = null;
  try {
    data = (await axios.get(URL)).data;
  } catch (err) { };

  return {
    props: {
      data,
    },
  };
}