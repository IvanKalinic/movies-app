import {Button, CardGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import {ReactstrapCard} from "../../components/ReactstrapCards/Card";
import axios from "axios";
import {callCryptoMarket} from "../../apis/cryptoMarket";

const CryptoMarket = () => {
    const [search, setSearch] = useState("");
    const [currencies, setCurrencies] = useState([]);

    const searchCurrencies = () => {
        if (!!search) {
            callCryptoMarket(search).then((response) => {
                if (response.data?.data?.pairs_attr !== undefined) {
                    const currencies = response.data?.data?.pairs_attr;
                    setCurrencies(currencies);
                    axios.post("http://localhost:5000/crypto/save", currencies)
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
            Search crypto currencies
        </Label>
        <Input value={search} onChange={(event) => setSearch(event.target.value)}/>
        <Button onClick={() => searchCurrencies()}>
            Search
        </Button>
        <CardGroup>
            {currencies?.map((curr, index) =>
                <ReactstrapCard id={index} title={curr?.search_main_text}
                                subtitle={curr?.search_main_subtext}
                                description={curr?.exchange_flag_ci}/>)}
        </CardGroup>
    </div>;
}

export default CryptoMarket;
