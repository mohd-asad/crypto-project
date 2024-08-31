import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumber } from "../../../functions/convertNumber";

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          // Includes a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + convertNumber(value);
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
