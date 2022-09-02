import axios from 'axios';

const searchBarFetch = async (value, maxResults) => {
    const hasMaxResults = maxResults ? '&maxResults=5' : '&maxResults=40'
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${value}${hasMaxResults}`;
    const { data: { items } } = await axios.get(URL);
    return items;
}

export default searchBarFetch;