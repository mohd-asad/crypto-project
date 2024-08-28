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

function CoinPage() {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      settingCoinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices) {
        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor: "rgba(58,128,233,0.1)",
              borderColor: "#3a80e9",
              pointRadius: 0,
            },
          ],
        });
        setLoader(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoader(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value);
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
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc}></CoinInfo>
        </>
      )}
    </div>
  );
}

export default CoinPage;
