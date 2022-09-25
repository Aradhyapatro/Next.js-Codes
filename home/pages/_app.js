import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar'
import { sessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <sessionProvider session={session}><Head><title>Next.js</title></Head><Navbar></Navbar><Component {...pageProps} /></sessionProvider>
}

export default MyApp
