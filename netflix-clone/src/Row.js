import React, { useEffect, useState } from "react";
import axios from './axios';
import requests from "./requests";

const Row = ({ title, fetchUrl }) => {
 const [movies, setMovies] = useState( [] );

 // A snippet of code which runs based on a specific condition
 useEffect(() => {
// run [], once when row loads, and dont run again

async function fetchData(){
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
}
fetchData();
 }, [fetchUrl])

  return (
    <div > 
 
      <h2>{title}</h2>

      {/* container -> posters  */}
    </div>
  );
};

export default Row;
