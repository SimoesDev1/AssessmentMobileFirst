import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="overlay">
      <div className="movie-details">
        <button className="close-button" onClick={onClose}>
          &times; Fechar
        </button>
        <h2>{movie.title}</h2>
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <p>
          <strong>Sinopse:</strong>{" "}
          {movie.sinopse.length > 150
            ? `${movie.sinopse.slice(0, 150)}...`
            : movie.sinopse}
        </p>
        <p>
          <strong>Avaliação:</strong> ⭐⭐⭐⭐ (4/5)
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
