import React from 'react';
import styles from '../styles/gamecard.module.scss';
import { format } from 'date-fns';

const GameCard = ({game}) => {
  const { name, metacritic, background_image, released } = game;
  const { gameCard, rating, bad, meh, good, imageWrapper} = styles;

  const ratingColor = metacritic < 40 ? bad : metacritic < 61 ? meh : good;

  return (
    <div className={gameCard}>
      <h1> {name} </h1>
      <p> Release date : {format( new Date(released), 'dd/MM/yyyy') } </p>
      <p className={`${rating} ${ratingColor}`}>{metacritic ? metacritic : "N/C"}</p>
      <div className={imageWrapper}>
        <img src={background_image} alt={`${name} game footage`} />
      </div>
    </div>
  );
};

export default GameCard;