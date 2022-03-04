// import React from 'react';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import GameDetail from '../../components/GameDetail';

const gameDetail = ({id}) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Game</title>
        <meta name="description" content="NextJS / API training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GameDetail id={id} />
    </div>
  )
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: { id }
  }
}

export default gameDetail;