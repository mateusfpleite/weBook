import axios from "axios";
import { useRouter } from 'next/router';
import BookDetailsCard from '../../components/BookCard/BookDetailsCard';

function BookDetails({ data }) {
  const router = useRouter();
  if (router.isFallback) return <h1></h1>

  return (
    <div>
      <BookDetailsCard book={data} />
    </div>
  )
}

export default BookDetails;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { bookId: 'zyTCAlFPjgYC' } }
    ],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { bookId } = params;
  const specifier = bookId.includes('isbn') ? `?q=${bookId}` : `/${bookId}`;
  const URL = `https://www.googleapis.com/books/v1/volumes${specifier}`;
  let data = null;
  try {
    data = bookId.includes('isbn')
      ? (await axios.get(URL)).data.items[0]
      : (await axios.get(URL)).data;
  } catch (err) { };

  return {
    props: {
      data,
    },
  };
}