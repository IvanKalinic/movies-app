import {Button, CardGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import {callImdbUnofficial} from "../../apis/imdbUnofficial";
import {ReactstrapCard} from "../../components/ReactstrapCards/Card";
import axios from "axios";
import {callImdbUnofficialSpecificFilm} from "../../apis/ImdbUnofficialSpecificFilm";

const ImdbUnoficial = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = () => {
        if (!!search) {
            callImdbUnofficial(search).then((response) => {
                if (response.data !== undefined) {
                    const ids = response.data.titles?.map(tit => tit.id) || [];
                    axios.all(ids.map(id => callImdbUnofficialSpecificFilm(id)))
                        .then(axios.spread(function (...res) {
                            // all requests are now complete
                            console.log(res);
                        }));
                    setMovies(response.data.titles);
                    axios.post("http://localhost:5000/imdbUnofficial/save", response.data.titles)
                        .then((response) => console.log(response.data))
                        .catch((error) => console.log(error));
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return <div>
        <Label>
            Search movies
        </Label>
        <Input value={search} onChange={(event) => setSearch(event.target.value)}/>
        <Button onClick={() => searchMovies()}>
            Search
        </Button>
        <CardGroup>
            {movies?.map((movie, index) =>
                <ReactstrapCard id={index} title={movie?.title} picture={movie?.image}/>)}
        </CardGroup>
    </div>;
}

export default ImdbUnoficial;
