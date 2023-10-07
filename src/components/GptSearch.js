import { BACKGROUND_IMAGE } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="BACKGROUND"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch