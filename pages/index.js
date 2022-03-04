import Head from 'next/head'
import GameList from '../components/GameList'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Game</title>
        <meta name="description" content="NextJS / API training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="main-title"> Next Game </h1>

      <GameList />

    </div>
  )
}

export default Home;