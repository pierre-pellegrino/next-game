import React, { useEffect, useState } from 'react';
// import { API_KEY } from '../secret_keys';
import { Triangle } from  'react-loader-spinner';
import { gameDetailsWrapper, apiLoaderWrapper, gameDetailsPicture, genreCard } from '../styles/gamedetails.module.scss';
import Head from "next/head";
import Link from 'next/link';

const GameDetail = ({id}) => {
  const [fetchedData, setFetchedData] = useState("");

  const getGameDetails = async () => {
    // const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.API_KEY}`)
    const gameDetails = await response.json();

    console.log(gameDetails)
    setFetchedData(gameDetails);
  }

  useEffect(() => {
    getGameDetails();
  }, [])

  if (fetchedData.length === 0) {
    return (
      <div className={apiLoaderWrapper}>
        <Triangle
          height="180"
          width="180"
          color='rgba(0,0,0,0.2)'
          ariaLabel='loading'
        />
      </div>
    )
  }
  else {
    const { name, description, background_image, website, genres, platforms } = fetchedData;

    return (
      <>
      <Head>
        <title>{fetchedData.name} details on Next Game</title>
      </Head>
      <div className={gameDetailsWrapper}>
        <Link href="/">
          <a className="nav-link">Go back home</a>
        </Link>
        <h1> {name} </h1>
        <div className={gameDetailsPicture}>
          <img src={background_image} alt={`${name} game footage`} />
        </div>
        <p>
          {genres.map((genre) => {
            return <span className={genreCard} key={genre.id}>{genre.name}</span>
          })}
        </p>
        <p> Available on : </p>
        <p>
          {platforms.map((platform) => {
            return <span className={genreCard} key={platform.platform.id}>{platform.platform.name}</span>
          })}
        </p>

        <h2 className="subtitle">Synopsis</h2>
        <div className="align-center" dangerouslySetInnerHTML={{__html: description}} />

        <h2 className="subtitle">Website</h2>
        <p><a target="_blank" rel="noreferrer" href={website}>{website}</a></p>
      </div>
      </>
    );
  }
};

export default GameDetail;