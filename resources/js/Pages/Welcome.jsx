import React from "react";
import ChartArea from "../components/ChartArea.jsx";
import BarChart from "../components/BarChart.jsx";
import Pi from "../components/PiChart.jsx";
import Map from "../components/map.jsx";

export default function Welcome() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex justify-center items-center w-1/2">
          <ChartArea />
        </div>
        <div className="flex justify-center items-center w-1/2" style={{ height: "500px" }}>
          <BarChart />
        </div>
        <div className="flex justify-center items-center w-1/2" style={{ height: "350px" }}>
          <Pi />
        </div>
        <div className="flex justify-center items-center w-1/2" style={{ height: "350px" }}>
          <Map />
        </div>
      </div>
    </>
  );
}
