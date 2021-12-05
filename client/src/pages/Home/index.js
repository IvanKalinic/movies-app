import React, { useEffect } from "react";
import { fetchTrandingMovies } from "../../apis";

const Home = () => {
  useEffect(() => {
    fetchTrandingMovies().then((res) => console.log(res.results));
  }, []);

  return <div>
    <h1>Home page</h1>
  </div>;
};

export default Home;
