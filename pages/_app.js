import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Footer, NewsLetter, Navbar } from '@components';

export default function App({ Component, pageProps }) {
  const router = useRouter();
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
      <Navbar bg={router.pathname !== '/' ? 'bg-gray' : 'bg-black'} />
      <Component {...pageProps} />
      {router.pathname !== '/contact' && <NewsLetter />}
      {router.pathname !== '/contact' && <Footer />}
    </>
  );
}
