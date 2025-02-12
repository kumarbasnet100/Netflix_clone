import React, { useEffect, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODMxMzc1Yjc2MTI0NDcyMWRjNjUzZjA0YTliYTM0MCIsIm5iZiI6MTczOTM0NjQ0OS41NDQsInN1YiI6IjY3YWM1MjExZDY2OWJmMGVhYTliODkzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KGtBAouh5ujtIQ8JFCI7KATFKrGg5dIu3ApcINvu3do'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  }, [])
  

  return (
    <div className="title-cards">
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card) => (
          <Link to={`/player/${card.id}`} className="card" key={card.id}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="cards" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
