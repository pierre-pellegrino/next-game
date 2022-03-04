import React, { useEffect, useState } from 'react';
import { API_KEY } from '../secret_keys';
import { Triangle } from  'react-loader-spinner';
import GameCard from './GameCard';
import styles from '../styles/gamecard.module.scss';
import Link from 'next/link';
import { apiLoaderWrapper } from '../styles/gamedetails.module.scss';

const GameList = () => {
  const [fetchedData, setFetchedData] = useState("");

  const fetchGameList = async () => {
    let response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2022-10-10&ordering=-added`);
    let gamesList = await response.json();

    setFetchedData(gamesList);
  }

  useEffect(() => {
    fetchGameList();
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
    return (
      <div className={styles.gameWrapper}>
        {fetchedData.results.map((game) => {
          return (
            <Link href={`/games/${game.id}`} key={game.id}>
              <a><GameCard game={game} /></a>
            </Link>
          )
        })}
      </div>
    );
  }


};

export default GameList;