import useGenericState from '../hooks/useGenericState';

function SearchBar() {
  const INITIAL_STATE = { searchBar: '' };
  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);

  const searchBarRequest = async (event) => {
    const { target } = event;
    setGenericState(event)
    
  };

  return (
    <>
      <input
      list="searchBar"
      placeholder="Search..."
      name="searchBar"
      onChange={ (e) => searchBarRequest(e) }
      value={ genericState.searchBar }
    />
      <datalist id="searchBar">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
    </>
  )
}

export default SearchBar;