import Context from '../context/Context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Context.Provider value={ 'olá' }>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
