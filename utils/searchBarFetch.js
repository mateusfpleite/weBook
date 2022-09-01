import axios from 'axios';

const searchBarFetch = async (value, maxResults) => {
    const hasMaxResults = maxResults ? '%22&maxResults=5' : '%22&maxResults=40'
    const URL = `https://www.googleapis.com/books/v1/volumes?q=%22${value}${hasMaxResults}`;
    const { data: { items } } = await axios.get(URL);
    return items;
}

export default searchBarFetch;