import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// ROOT COMPONENT SURROUNDS EVERYTHING ELSE - CUSTOM THEME FOR EVEYTHING

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};
