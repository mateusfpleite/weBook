import useGenericState from '../../hooks/useGenericState';
import searchBarFetch from '../../utils/searchBarFetch';
import { useState } from 'react';
import SearchBarCard from './SearchBarCard';
import Link from 'next/link';
import SearchBarOptions from './SearchBarOptions';

function SearchBar() {
  const INITIAL_STATE = { searchBar: '', language: false };
  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);
  const [searchBarData, setSearchBarData] = useState([]);

  const verifySearchBarText = (text) => {
    const reg = /.*\S.*/;
    return reg.test(text);
  };

  const searchBarRequest = async (event) => {
    const { target } = event;
    setGenericState(event)
    setSearchBarData(await searchBarFetch(target.value, true, genericState.language) || []);
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
                    key={ data.id }
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
      <SearchBarOptions genericState={genericState} setGenericState={setGenericState} />

    </>
  )
}

export default SearchBar;