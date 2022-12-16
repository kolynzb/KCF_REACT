import "../styles/moviestyles.css";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

function Home() {
  // Create state variable to keep track of the movie data
  const [movieData, setMovieData] = useState([]);
  // Create state variable to keep track of the loading state -> Is the api done loading
  const [loading, setLoading] = useState(true);

  // THIS API URL or api endpoint
  const API_URL =
    "https://api.themoviedb.org/3/trending/all/week?api_key=1b26809a9f6f50bf9da2b56a2234c3ab&language=en-US&page=1";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [API_URL]);

  const base_url_img = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="App">
      <Navbar />
      <div class="container">
        {loading ? (
          <>
            <h1>Loading.....</h1>
            <Loader />
          </>
        ) : (
          <div class="cellphone-container">
            {movieData.results?.map((movie, key) => (
              <MovieCard
                key={key}
                name={movie.title}
                overview={movie.overview}
                posterimg={base_url_img + movie.poster_path}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
