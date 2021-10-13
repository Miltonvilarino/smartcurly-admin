import type { AppProps } from 'next/app'
import CreateGlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CreateGlobalStyle />
    </>
  )
}
export default MyApp
