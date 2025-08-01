import { useState } from "react";

import CustomThemeProvider from "./components/CustomThemeProvider";
import computeForecast from "./utils/computeForecast";
import stages from "./data/stages";
import ForecastTable from "./components/ForecastTable";
import StageOverview from "./components/StageOverview";
import useInterval from "./hooks/useInterval";

function App() {
  const [forecasts, setForecasts] = useState(computeForecast());

  useInterval(() => setForecasts(computeForecast()), 1000);

  const tableData = [
    ...forecasts[0].forecasts,
    ...forecasts[1].forecasts,
    ...forecasts[2].forecasts,
    ...forecasts[3].forecasts,
    ...forecasts[4].forecasts,
  ]
    .sort((a, b) => a - b)
    .map((date) => {
      const obj = stages.find((stage) => stage.forecasts.includes(date));
      return { name: obj?.name, date };
    });

  return (
    <CustomThemeProvider>
      <StageOverview />
      <ForecastTable data={tableData} />
    </CustomThemeProvider>
  );
}

export default App;
