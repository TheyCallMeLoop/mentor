/* eslint-disable no-undef */
import React from "react";
import Chart from "react-apexcharts";
const Progresschart = () => {
  const option = {
    series: [80, 10, 5, 3, 2,],
    options: {
      chart: {
        width: 300,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              show: true,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 200,
      },
      colors: ["  #2C3093", "#076538", "#F45531", "#3CA4DE"], // Custom colors for the chart
      labels: [
        "White: 80%",
        "Asian: 10%",
        "Black: 5%",
        "Latinx: 3%",
        "Other: 2%",
      ], // Custom labels for the chart
    },
  };

  return (
    <Chart
      options={option.options}
      series={option.series}
      type="donut"
      width={400}
    />
  );
};

export default Progresschart;
