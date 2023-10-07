import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  // NEED NEW ACCOUNT FOR GPT API
  // const { movieResults, movieNames } = gpt;
  // if(!movieNames) return null;

  const { movieResults } = gpt;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {/* 
        // NEED NEW ACCOUNT FOR GPT API
        {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)} */}
        {movieResults && <MovieList title={movieResults[0].name} movies={movieResults} />}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
