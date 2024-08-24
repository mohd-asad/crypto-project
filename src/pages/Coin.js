import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader";
import Header from "../components/Common/Header";
import { settingCoinObject } from "../functions/setCoinObject";
import List from "../components/Dashboard/List";
import axios from "axios";
import CoinInfo from "../components/Coin/CoinInfo";

function CoinPage() {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [coinData, setCoinData] = useState();
  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log(response);
          settingCoinObject(setCoinData, response.data);
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
        });
    }
  }, [id]);
  return (
    <div>
      <Header />
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData}></List>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc}></CoinInfo>
        </>
      )}
    </div>
  );
}

export default CoinPage;
