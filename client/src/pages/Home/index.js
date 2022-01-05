import React, { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchTrendingMusic } from "../../apis";
import { TabList, Tab, Tabs, TabPanels, TabPanel, css } from "@chakra-ui/react";
import TrendingMovies from "../../components/TrendingMovies";
import TrendingMusic from "../../components/TrendingMusic";
import axios from "axios";
import { useUser } from "../../context/UserContext";

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

  return (
    <div style={{ marginTop: "10px", height: "100%" }}>
      {!user ? (
        <div>Please login to continue!</div>
      ) : (
        <Tabs width="100%" size="md" isFitted variant="enclosed">
          <TabList
            overflowX="auto"
            css={css({
              scrollbarWidth: "none",
              "::-webkit-scrollbar": { display: "none" },
              "-webkit-overflow-scrolling": "touch",
              boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
              border: "0 none",
            })}
          >
            <Tab>Trending Movies/Series</Tab>
            <Tab>Other</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TrendingMovies
                list={trendingMovies}
                title="Trending movies/series:"
              />
            </TabPanel>
            <TabPanel>
              <TrendingMusic
                list={trendingMusic}
                title="Trending music artists"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </div>
  );
};

export default Home;
