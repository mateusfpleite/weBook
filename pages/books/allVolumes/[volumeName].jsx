import { useRouter } from 'next/router';
import BookCard from '../../../components/BookCard/BookCard';
import searchBarFetch from "../../../utils/searchBarFetch";

function AllVolumes({ data }) {
  const router = useRouter();

  if (router.isFallback) return (<h1>Loading...</h1>)

  return (
    <div>
      {data.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { volumeName: 'Harry' } }],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { volumeName } = context.params;
  const data = await searchBarFetch(volumeName, false)
  return {
    props: {
      data,
    },
  };
}

export default AllVolumes;