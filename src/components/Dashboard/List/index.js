import React from "react";
import "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <Tooltip title="Coin Logo" placement="bottom-start">
          <td className="td-image ">
            <img src={coin.image} className="coin-logo coin-image-td"></img>
          </td>
        </Tooltip>

        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="td-info">
            <div className="coin-sym-name">
              <p className="coin-sym td-p">{coin.symbol}</p>
              <p className="coin-name td-p">{coin.name}</p>
            </div>
          </td>
        </Tooltip>

        <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip price-chip-td">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex ">
              <div className="price-chip chip-red price-chip-td">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip chip-red td-icon">
                <TrendingDownIcon />
              </div>
            </td>
          )}
        </Tooltip>

        <Tooltip title="Current Price" placement="bottom">
          <td>
            <h3
              className="coin-price td-center-align coin-price-td"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>

        <Tooltip title="Total Volume" placement="bottom-end">
          <td>
            <p className="total_volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="desktop-td-mkt">
            <p className="total_volume td-right-align ">
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="mobile-td-mkt">
            <p className="total_volume td-right-align ">
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
}
export default List;
