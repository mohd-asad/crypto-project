import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader";
import Header from "../components/Common/Header";
import { settingCoinObject } from "../functions/setCoinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart/Chart";
import { convertDate } from "../functions/convertDate";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/setChartData";
import TogglePriceType from "../components/Coin/PriceType";

function CoinPage() {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      settingCoinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoader(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoader(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoader(false);
    }
  };

  const handlePriceType = async (event, newType) => {
    setLoader(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoader(false);
    }
  };

  return (
    <div>
      <Header />
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData}></List>
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceType={handlePriceType}
            />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc}></CoinInfo>
        </>
      )}
    </div>
  );
}

export default CoinPage;
