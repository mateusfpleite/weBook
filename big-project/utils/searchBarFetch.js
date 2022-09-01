import axios from 'axios';

const searchBarFetch = async (value) => {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=%22${value}%22&maxResults=5`;
  const { data: { items } } = await axios.get(URL);
  return items;
}

export default searchBarFetch;