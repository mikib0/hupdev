import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
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
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
