import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import stages from "../data/stages";
import { Box } from "@mui/material";

const StageOverview = () => {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Stage overview
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        {stages.map((stage) => (
          <Card sx={{ width: 384, border: "1px solid #515151", m: 2 }}>
            <CardMedia sx={{ height: 140 }} image={stage.img} />
            <CardContent sx={{ p: 3 }}>
              <Typography align="center">{stage.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default StageOverview;
