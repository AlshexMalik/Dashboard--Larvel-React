import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ChartDataLabels);

const ChartArea = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Funding",
      lineTension: 0.4,
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(78, 115, 223, 0.3)");
        gradient.addColorStop(1, "rgba(78, 115, 223, 0)");
        return gradient;
      },
      borderColor: "rgba(78, 115, 223, 1)",
      borderWidth: 2,
      fill: true,
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 15,
      pointHoverBackgroundColor: "rgb(255, 0, 0)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [8888, 10000, 5000, 15000, 10, 20000, 65, 25000, 20000, 30000, 10, 40000],
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 7,
        },
      },
      y: {
        ticks: {
          display: false,
          maxTicksLimit: 5,
          padding: 10,
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
        grid: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          borderDash: [2],
          zeroLineBorderDash: [2],
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        
      },
      tooltip: {
        backgroundColor: "rgb(233, 234, 242)",
        bodyColor: "#858796",
        titleMarginBottom: 10,
        titleColor: '#6e707e',
        titleFont: {
          size: 14,
        },
        borderColor: '#dddfeb',
        borderWidth: 1,
        displayColors: false,
        mode: 'index',
        intersect: false,
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
      datalabels: {
        display: true,
        anchor: 'end', // Position the label above the point
        align: 'end',  // Align the label vertically above the point
        formatter: (value) => `$${value.toLocaleString()}`,
        color: '#333',
        font: {
          size: 12,
          weight: 'bold',
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default ChartArea;
