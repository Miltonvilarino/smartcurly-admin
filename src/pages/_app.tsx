import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import CreateGlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const firebaseConfig = {};

  initializeApp(firebaseConfig);

  return (
    <>
      <Component {...pageProps} />
      <CreateGlobalStyle />
    </>
  );
}
export default MyApp;
