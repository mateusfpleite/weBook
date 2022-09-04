import { useRouter } from 'next/router';
import { useState } from 'react';
import BookCard from '../../../components/BookCard/BookCard';
import searchBarFetch from "../../../utils/searchBarFetch";

function AllVolumes({ data }) {
  const router = useRouter();
  if (router.isFallback) return (<h1>Loading...</h1>)

  const [showFiltersList, setListItem] = useState({});

  const categories = [...new Set(data.map((book) => (
    book.volumeInfo.categories?.join(', ')
  )))];

  const showFilterItem = ({target}) => {
    setListItem((prev) => ({...prev, [target.id]: !prev[target.id]}))
  }
  console.log(showFiltersList);
  return (
    <div style={{display: "flex"}}>
      <div>
        <h2>Filters:</h2> 
        <ul style={{listStyleType: 'none'}}>
        <h4 id="category" 
        onClick={(event) => showFilterItem(event)}
        style={{cursor: 'pointer' }}>Categories</h4>
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