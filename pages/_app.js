import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Footer } from '../components';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // offset: 200,
      // duration: 400,
      delay: 200,
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
