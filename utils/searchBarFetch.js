import axios from 'axios';

const searchBarFetch = async (value, category, maxResults, language) => {
  const lang = language ? `&langRestrict=${language}` : '';
  const hasMaxResults = maxResults ? `&maxResults=$${maxResults}` : '&maxResults=40';
  const withCat = category ? `+subject:${category}`: '&';
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${value}${withCat}${hasMaxResults}${lang}`;
  console.log(URL);
  const {
    data: { items },
  } = await axios.get(URL);
  return items;
};

export default searchBarFetch;
