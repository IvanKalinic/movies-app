import React, {useEffect, useState} from "react";
import {css, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import TrendingMovies from "../../components/TrendingMovies";
import axios from "axios";
import {useUser} from "../../context/UserContext";
import {Button} from "reactstrap";
import UserPreferenceRecommendation from "../../components/Recommendation/UserPreference/UserPreferenceRecommendation";

const PopularMovies = () => {
    const [todayMovies, setTodayMovies] = useState([]);
    const [weekMovies, setWeekMovies] = useState([]);
    const { user } = useUser();

    const checkMovies = (index) => {
        if (index === 0 && !todayMovies?.length) {
            console.log("todays movies");
            axios.get("http://localhost:5000/trendingMovies/today").then((resp) => {
                const filteredMovies = resp.data?.filter(m => m.Error === undefined);
                setTodayMovies(filteredMovies);
            });
        } else if (index === 1 && !weekMovies?.length) {
            console.log("weeks movies");
            axios.get("http://localhost:5000/trendingMovies/week").then((resp) => {
                const filteredMovies = resp.data?.filter(m => m.Error === undefined);
                setWeekMovies(filteredMovies);
            });
        }
    };

    useEffect(() => {
        if (!user) return;
        checkMovies(0);
    }, [user]);

    return (
        <div style={{ marginTop: "10px", height: "100%" }}>
            {!user ? (
                <div>Please login to continue!</div>
            ) : (
                <Tabs onChange={index => checkMovies(index)}>
                    <TabList css={css({
                        "justify-content": "center"
                    })}>
                        <Tab><Button color="blue">Today</Button></Tab>
                        <Tab><Button color="blue">Week</Button></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TrendingMovies
                                list={todayMovies}
                                title="Trending movies today"
                            />
                        </TabPanel>
                        <TabPanel>
                            <TrendingMovies
                                list={weekMovies}
                                title="Trending movies this week"
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            )}
            <UserPreferenceRecommendation userId={user}/>
        </div>
    );
};

export default PopularMovies;
