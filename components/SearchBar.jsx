import useGenericState from '../hooks/useGenericState';
import searchBarFetch from '../utils/searchBarFetch';
import { useState } from 'react';
import SearchBarCard from './SearchBarCard';
import Link from 'next/link';

function SearchBar() {
  const INITIAL_STATE = { searchBar: '' };
  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);
  const [searchBarData, setSearchBarData] = useState([]);

  const verifySearchBarText = (text) => {
    const reg = /.*\S.*/;
    return reg.test(text);
  };

  const searchBarRequest = async (event) => {
    const { target } = event;
    setGenericState(event)
    setSearchBarData(await searchBarFetch(target.value, true) || []);
  };

  return (
    <>
      <input
        placeholder="Search..."
        name="searchBar"
        onChange={(e) => searchBarRequest(e)}
        value={genericState.searchBar}
      />
      {verifySearchBarText(genericState.searchBar) &&
        <div style={{ position: 'absolute' }}>
          {searchBarData.length
            ? (
              <>
                {searchBarData.map((data) => (
                  <SearchBarCard
                    {...data}
                    query={genericState.searchBar}
                  />
                ))}
                <Link href={`/books/allVolumes/${genericState.searchBar}`}>See all!</Link>
              </>
            )
            : 'No results found'
          }
        </div>
      }
    </>
  )
}

export default SearchBar;