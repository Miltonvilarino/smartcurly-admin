import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoImg from '../assets/logo.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Curly - Admin</title>
        <meta name="description" content="Smart Curly Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={logoImg} alt="logo" />
      <h1>Smart Curly</h1>
    </div>
  )
}

export default Home
