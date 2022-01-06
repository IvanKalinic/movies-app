import React, { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchTrendingMusic } from "../../apis";
// import { TabList, Tab, Tabs, TabPanels, TabPanel, css } from "@chakra-ui/react";
// import TrendingMovies from "../../components/TrendingMovies";
// import TrendingMusic from "../../components/TrendingMusic";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import Questionnaire from "../Questionnaire";
import Warning from "../../components/Warning";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingMusic, setTrendingMusic] = useState([]);
  const { user } = useUser();

  const checkMovies = () => {
    if (!trendingMovies?.length) {
      fetchTrendingMovies().then((res) => {
        console.log(res.results);
        setTrendingMovies(res.results);
        axios.post("http://localhost:5000/trendingMovies/save", res.results);
      });
    } else {
      axios
        .get("http://localhost:5000/trendingMovies/all")
        .then((res) => setTrendingMovies(res));
    }
  };

  const checkMusic = () => {
    if (!trendingMusic?.length) {
      fetchTrendingMusic().then((res) => {
        console.log(res.artists.artist);
        setTrendingMusic([...res.artists.artist]);
        axios.post(
          "http://localhost:5000/trendingMusic/save",
          res.artists.artist
        );
      });
    } else {
      axios
        .get("http://localhost:5000/trendingMusic/all")
        .then((res) => setTrendingMusic(res.artists.artist));
    }
  };

  useEffect(() => {
    if (!user) return; //redirect to login
    // checkMusic();
    // checkMovies();
  }, [user]);

  return <Box>{user ? <Questionnaire /> : <Warning />}</Box>;
};

export default Home;
