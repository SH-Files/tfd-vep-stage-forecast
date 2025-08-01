import imgStageA from "../images/stageA.png";
import imgStageB from "../images/stageB.png";
import imgStageC from "../images/stageC.png";
import imgStageD from "../images/stageD.png";
import imgStageE from "../images/stageE.png";

const stages = [
  {
    name: "Stage A",
    anchorResetDate: new Date(Date.UTC(2025, 6, 28, 7)),
    img: imgStageA,
    forecasts: [],
  },
  {
    name: "Stage B",
    anchorResetDate: new Date(Date.UTC(2025, 6, 29, 7)),
    img: imgStageB,
    forecasts: [],
  },
  {
    name: "Stage C",
    anchorResetDate: new Date(Date.UTC(2025, 6, 30, 7)),
    img: imgStageC,
    forecasts: [],
  },
  {
    name: "Stage D",
    anchorResetDate: new Date(Date.UTC(2025, 6, 31, 7)),
    img: imgStageD,
    forecasts: [],
  },
  {
    name: "Stage E",
    anchorResetDate: new Date(Date.UTC(2025, 7, 1, 7)),
    img: imgStageE,
    forecasts: [],
  },
];

export default stages;
