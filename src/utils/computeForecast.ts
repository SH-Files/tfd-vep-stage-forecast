import initStages from "../data/stages";

const computeForecast = () => {
  const stages = [...initStages];

  stages.forEach((obj) => {
    const { anchorResetDate, forecasts }: any = obj;

    for (let ms = 0; forecasts.length < 4; ms += 432e6) {
      const nextDate: any = new Date(anchorResetDate.getTime() + ms);

      if (nextDate - Date.now() >= -864e5) {
        forecasts.push(nextDate);
      }
    }
  });

  return stages;
};

export default computeForecast;
