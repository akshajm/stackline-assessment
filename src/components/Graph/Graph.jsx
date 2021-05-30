import React from "react";
import moment from "moment";
import { Line } from "react-chartjs-2";
import "./Graph.css";
import { graph_data } from "../../reducer/all_sales";

const Graph = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  let x_axis = [];
  let retail_sales = [];
  let wholesale_sales = [];
  graph_data.forEach((sale) => {
    const [, month] = sale.weekEnding.split("-");
    x_axis.push(moment(month, "M").format("MMMM"));
    retail_sales.push(sale.retailSales);
    wholesale_sales.push(sale.wholesaleSales);
  });

  const plot = {
    labels: x_axis,
    datasets: [
      {
        label: "retail sales",
        fill: false,
        data: retail_sales,
        lineTension: 0.5,
        borderColor: "rgb(0, 0, 255)",
      },
      {
        label: "wholesale sales",
        fill: false,
        data: wholesale_sales,
        lineTension: 0.5,
        borderColor: "rgb(169, 169, 169)",
      },
    ],
  };

  return (
    <div className="graph">
      <Line data={plot} height={450} options={options} />
    </div>
  );
};

export default Graph;
