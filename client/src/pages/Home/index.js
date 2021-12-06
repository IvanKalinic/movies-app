import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../apis";
import { TabList, Tab, Tabs, TabPanels, TabPanel, css } from "@chakra-ui/react";
import TrendingMovies from "../../components/TrendingMovies";
import axios from "axios";
import { useUser } from "../../context/UserContext";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (!user) return; //redirect to login
    if (!trendingMovies.length) {
      fetchTrendingMovies().then((res) => {
        setTrendingMovies(res.results);
        axios.post("http://localhost:5000/trendingMovies/save", res.results);
      });
    } else {
      axios
        .get("http://localhost:5000/trendingMovies/all")
        .then((res) => setTrendingMovies(res.result));
    }
  }, [user]);

  return (
    <div style={{ marginTop: "10px", height: "100%" }}>
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
            <TrendingMovies trendingMovies={trendingMovies} />
          </TabPanel>
          <TabPanel>Something else</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Home;
