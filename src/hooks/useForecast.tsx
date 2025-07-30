const anchorDates: any = {
  stageA: new Date(Date.UTC(2025, 6, 28, 7)),
  stageB: new Date(Date.UTC(2025, 6, 29, 7)),
  stageC: new Date(Date.UTC(2025, 6, 30, 7)),
  stageD: new Date(Date.UTC(2025, 6, 31, 7)),
  stageE: new Date(Date.UTC(2025, 7, 1, 7)),
};

const useForecast = () => {
  const forecasts: any = {
    stageA: [],
    stageB: [],
    stageC: [],
    stageD: [],
    stageE: [],
  };

  Object.keys(forecasts).forEach((key) => {
    let milliseconds = 0;
    const currentAnchorDate = anchorDates[key];

    while (forecasts[key].length < 10) {
      const nextDate: any = new Date(
        currentAnchorDate.getTime() + milliseconds
      );

      // Add five days in milliseconds
      milliseconds += 432e6;

      if (nextDate - Date.now() > 0) {
        forecasts[key].push(nextDate);
      }
    }
  });

  return forecasts;
};

export default useForecast;
