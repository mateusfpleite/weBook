import { useRouter } from 'next/router';
import { useState } from 'react';
import BookCard from '../../../components/BookCard/BookCard';
import searchBarFetch from "../../../utils/searchBarFetch";

function AllVolumes({ data }) {
  if (router.isFallback) return (<h1>Loading...</h1>)
  
  const [showFiltersList, setListItem] = useState({});
  const router = useRouter();

  const categories = [...new Set(data.map((book) => (
    book.volumeInfo.categories?.join(', ')
  )))];
  return (
    <div style={{display: "flex"}}>
      <div>
        <h2>Filters:</h2> 
        <ul style={{listStyleType: 'none'}}>
        <h4 name="category" 
        onClick={() => setListItem({category: 'category'})}
        style={{cursor: 'pointer' }}>Category</h4>
        {showFiltersList.category 
        && categories.map((category) => <li style={{marginBottom: '5px'}}>{category}</li>)}
        </ul>
      </div>
    <div>
      {data.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
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