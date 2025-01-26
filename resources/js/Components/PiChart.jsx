import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

// Register Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PiChart = () => {
  const data = {
    labels: ["BCF", "Sponsor", "Coordinate", "Donate", "Partner"], // Labels for the pie chart
    datasets: [
      {
        label: "Votes",
        data: [44, 14, 7, 16, 21],
        backgroundColor: [
          "#880D0D",
          "#5C9BD5",
          "#CD7471",
          "#415F79",
          "#717C83",
        ],
        borderColor: [
          "#880D1D",
          "#5C9BD6",
          "#CD7472",
          "#415F89",
          "#717C84",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      title: {
        display: true,
        text: "Project Type", // Title of the chart
        font: {
          size: 18,
        },
        color: "#333",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const dataset = tooltipItem.dataset.data;
            const value = dataset[tooltipItem.dataIndex];
            return ` %${value} votes`;
          },
        },
      },
      // Enable datalabels to display on the slices
      datalabels: {
        display: true, // Enable data labels on slices
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex]; // Get the label for the slice
          const total = context.dataset.data.reduce((sum, val) => sum + val, 0); // Calculate total for percentage
          const percentage = ((value / total) * 100).toFixed(1); // Calculate percentage
          return `${label}\n${percentage}%`; // Combine label and percentage
        },
        color: "#fff", // White text for better contrast
        font: {
          size: 12,
          weight: "bold",
        },
        textAlign: "center",
      },
    },
    cutout: "55%", // Converts the pie chart into a doughnut chart by creating a hollow center
  };

  return <Doughnut data={data} options={options} />;
};

export default PiChart;
