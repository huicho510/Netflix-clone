import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, SetMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      SetMovie(
        request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
      );
      return request;  
    }
    fetchData();
  }, []); // runs once when brackets are empty
  console.log(movie)

  return (
    <header>
      {" "}
      {/*<<< Background Image */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
