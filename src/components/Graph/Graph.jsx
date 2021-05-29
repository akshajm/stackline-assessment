import React from "react";
import { Line } from "react-chartjs-2";
import "./Graph.css";
import Sales from "../../data/stackline_frontend_assessment_data_2021";

const Graph = () => {
  const options = {
    legend: {
      display: false,
      // positon: "right",
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
          },
        },
      ],
    },
  };

  let x_axis = [];
  let retail_sales = [];
  let wholesale_sales = [];

  Sales[0].sales.forEach((sale) => {
    x_axis.push(sale.weekEnding);
    retail_sales.push(sale.retailSales);
    wholesale_sales.push(sale.wholesaleSales);
  });

  const plot = {
    labels: x_axis,
    datasets: [
      {
        label: "retail sales",
        fill: false,
        // backgroundColor: "rgb(25, 41, 58)",
        data: retail_sales,
        borderColor: "rgb(25, 41, 58)",
      },
      {
        label: "wholesale sales",
        fill: false,
        data: wholesale_sales,
        // backgroundColor: "rgb(169, 169, 169)",
        borderColor: "rgb(169, 169, 169)",
      },
    ],
  };

  return (
    <div className="graph">
      {console.log(plot)}
      <Line data={plot} options={options} />
    </div>
  );
};

export default Graph;
