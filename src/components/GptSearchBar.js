import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/collection?query=' + movie, API_OPTIONS);
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results


    // NEED NEW ACCOUNT FOR GPT API
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // const tmdbResults = await Promise.all(promiseArray);
    // dispatch(addGptMovieResult({movieNames: gptMovies , movieResults: tmdbResults}))

    // TMDB SEARCH FUNCTIONALITY
    const tmdbResults = await searchMovieTMDB(searchText.current.value)
    
    dispatch(addGptMovieResult(tmdbResults))
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form className="2-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSeachPlaceholder}
          ref={searchText}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
