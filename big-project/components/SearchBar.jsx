import useGenericState from '../hooks/useGenericState';
import searchBarFetch from '../utils/searchBarFetch';
import Link from 'next/link';
import { useState } from 'react';

function SearchBar() {
  const INITIAL_STATE = { searchBar: '' };
  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);
  const [state, setState] = useState([]);


  const searchBarRequest = async (event) => {
    const { target } = event;
    setGenericState(event)
    setState(await searchBarFetch(target.value) || []);
  };

  return (
    <>
      <input
        placeholder="Search..."
        name="searchBar"
        onChange={(e) => searchBarRequest(e)}
        value={genericState.searchBar}
      />
      <div style={{ position: 'absolute' }}>
        {state.length
          ? (state.map(({ id, volumeInfo }) => (
            <>
              <Link href={`/book/${id}`} key={id}>
                <a>
                  <div style={{ position: 'relative', backgroundColor: 'white', border: '1px solid black' }}>
                    <img
                      src={volumeInfo.imageLinks?.thumbnail || 'https://tinyurl.com/36ys7v4w'}
                      style={{ width: '40px' }}
                    />
                    <span>{volumeInfo.title}</span>
                  </div>
                </a>
              </Link>
            </>
          )))
          : 'No results found'}
      </div>

    </>
  )
}

export default SearchBar;