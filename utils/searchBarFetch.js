import axios from 'axios';

const searchBarFetch = async ({value, category=null, maxResults=null, language=null, author=null}) => {
  const lang = language ? `&langRestrict=${language}` : '';
  const hasMaxResults = maxResults ? `&maxResults=${maxResults}` : '&maxResults=20';
  const withCat = category ? `+subject:'${category}'`: '';
  const withAuthor = author ? `+inauthor:'${author}'` : ''
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${value}${withAuthor}${withCat}${hasMaxResults}${lang}`;
  const {
    data: { items },
  } = await axios.get(URL);
  return items;
};

export default searchBarFetch;
