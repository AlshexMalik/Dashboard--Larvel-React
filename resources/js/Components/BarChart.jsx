import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const BarChart = () => {
  // Chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Family',
        data: [100, 150, 200, 300, 250, 60],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(1, 65, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(67, 103, 211, 0.2)');
          return gradient;
        },
        borderColor: 'rgba(78, 115, 223, 1)',
        borderWidth: 2,
      },
      {
        label: 'Person',
        data: [325, 250, 400, 550, 420, 99],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgb(233, 78, 111)');
          gradient.addColorStop(1, 'rgb(250, 200, 211)');
          return gradient;
        },
        borderColor: 'rgb(233, 22, 68)',
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Beneficiary Data',
        font: {
          size: 18,
        },
        color: '#333',
      },
      tooltip: {
        backgroundColor: 'rgb(233, 234, 242)',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: 'rgba(78, 115, 223, 1)',
        borderWidth: 1,
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#333',
        font: {
          size: 12,
          weight: 'bold',
        },
        formatter: (value) => value,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
        },
      },
      y: {
        
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          display:false,
          color: '#666',
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;
