import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useForecast from "./hooks/useForecast";

const computeDates = () => {};

function App() {
  const stageAReset = new Date(Date.UTC(2025, 6, 28, 7));
  const stageBReset = new Date(Date.UTC(2025, 6, 29, 7));
  const stageCReset = new Date(Date.UTC(2025, 6, 30, 7));
  const stageDReset = new Date(Date.UTC(2025, 6, 31, 7));
  const stageEReset = new Date(Date.UTC(2025, 7, 1, 7));

  const currentHour = new Date().getHours();

  const forecasts = useForecast();

  console.log(forecasts);

  return (
    <>
      {Object.keys(forecasts).map((key) => {
        const dates = forecasts[key];

        return dates.map((date: any) => (
          <p>
            {key} + ', ' + {date.toString()}
          </p>
        ));
      })}
    </>
  );
}

export default App;
