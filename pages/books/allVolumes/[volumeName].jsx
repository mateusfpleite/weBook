import { useRouter } from 'next/router';
import { useState } from 'react';
import BookCard from '../../../components/BookCard/BookCard';
import searchBarFetch from "../../../utils/searchBarFetch";

function AllVolumes({ data }) {
  const router = useRouter();

  const [ showFiltersList, setFiltersList ] = useState({ category: false, authors: false });
  if (router.isFallback) return (<h1>Loading...</h1>)

  let categoryKey = 0;
  let authorKey = 0;

  const categories = [ ...new Set(data.map((book) => (
    book.volumeInfo.categories?.join(', ')
  ))) ];
  const authors = [ ...new Set(data.map((book) => (
    book.volumeInfo.authors?.join(', ')
  ))) ];

  const showFilters = ({ target: { id } }) => {
    setFiltersList((prevState) => ({ ...prevState, [ id ]: !prevState[ id ] }))
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2>Filters:</h2>
        <ul style={{ listStyleType: 'none' }}>
          <h4
            id="category"
            onClick={showFilters}
            style={{ cursor: 'pointer' }}
          >
            Category
          </h4>
          {showFiltersList.category && categories.map((category) => {
            categoryKey += 1;
            return <li key={categoryKey} style={{ marginBottom: '5px' }}>{category}</li>
          })}
          <h4
            id="authors"
            onClick={showFilters}
            style={{ cursor: 'pointer' }}
          >
            Authors
          </h4>
          {showFiltersList.authors && authors.map((author) => {
            authorKey += 1;
            return <li key={authorKey} style={{ marginBottom: '5px' }}>{author}</li>
          })}
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
    paths: [ { params: { volumeName: 'Harry' } } ],
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