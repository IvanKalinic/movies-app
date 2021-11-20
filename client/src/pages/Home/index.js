import React, { useEffect } from "react";
import { fetchTrandingMovies } from "../../apis";

const Home = () => {
  useEffect(() => {
    fetchTrandingMovies().then((res) => console.log(res.results));
  }, []);

  return <div>Home page</div>;
};

export default Home;
