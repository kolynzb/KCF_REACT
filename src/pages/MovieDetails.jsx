import React from "react";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLoaderData();
  return <div>{console.log(movie)}</div>;
};

export default MovieDetails;
