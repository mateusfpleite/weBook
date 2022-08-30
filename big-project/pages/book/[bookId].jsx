import axios from "axios";
import BookDetailsCard from "../../components/BookDetailsCard";
import { useRouter } from 'next/router';

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
  const { data }= await axios.get(URL);
  return {
    props: {
      data
    }
  }
}