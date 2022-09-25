import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (<SessionProvider session={session} refetchInterval={5 * 60}>
    <Head>
      <title>
        Next.js
      </title>
    </Head>
    <Navbar>
    </Navbar>
    <Component {...pageProps} />
  </SessionProvider >);
}

export default MyApp
