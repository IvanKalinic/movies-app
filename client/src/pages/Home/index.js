import React, { useEffect } from "react";
// import { fetchTrandingMovies } from "../../apis";
import {callImdbUnofficial} from "../../apis/imdbUnofficial";

const Home = () => {
  useEffect(() => {
    // fetchTrandingMovies().then((res) => console.log(res.results));
    callImdbUnofficial().then((res) => console.log(res));
  }, []);

  return <div>Home page</div>;
};

export default Home;
