import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav';
import Foot from '../components/Foot';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Component {...pageProps} />
      <Foot />
    </>
  );
}

export default MyApp;
