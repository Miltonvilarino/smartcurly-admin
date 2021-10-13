import type { AppProps } from 'next/app'
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import CreateGlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {

  const firebaseConfig = {
    apiKey: "AIzaSyAnjtmX7CgTXk3FLdEJsOYYQ5UomqCGKXQ",
    authDomain: "smart-curly-dev.firebaseapp.com",
    projectId: "smart-curly-dev",
    storageBucket: "smart-curly-dev.appspot.com",
    messagingSenderId: "532790803830",
    appId: "1:532790803830:web:e548af7da8100a032a8e57",
    measurementId: "G-VJWRMZDPML",
  };


  initializeApp(firebaseConfig);

  return (
    <>
      <Component {...pageProps} />
      <CreateGlobalStyle />
    </>
  )
}
export default MyApp
