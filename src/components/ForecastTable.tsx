import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatCountDown, formatDateTime } from "../utils/formatting";

const ForecastTable = ({ data }: any) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
  };

  return (
    <Table component={Paper}>
      <TableHead>
        <TableRow>
          <TableCell align="center">Stage Name</TableCell>
          <TableCell align="center">
            <span style={{ color: "#6fbf73" }}>Stage active since</span> / Spawn
            in
          </TableCell>
          <TableCell align="center">Spawn Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ name, date }: any, index: number) => {
          const countdown = date - Date.now();

          return (
            <TableRow
              sx={{ opacity: 1 - (index / (data.length - 1)) * (1 - 0.1) }}
            >
              <TableCell
                // @ts-ignore
                sx={{
                  color: countdown < 0 && "#6fbf73",
                  fontWeight: countdown < 0 && 900,
                }}
                align="center"
              >
                {name}
              </TableCell>

              <TableCell
                // @ts-ignore
                sx={{
                  color: countdown < 0 && "#6fbf73",
                  fontWeight: countdown < 0 && 900,
                }}
                align="center"
              >
                {formatCountDown(countdown)}
              </TableCell>

              <TableCell
                // @ts-ignore
                sx={{
                  color: countdown < 0 && "#6fbf73",
                  fontWeight: countdown < 0 && 900,
                }}
                align="center"
              >{`${formatDateTime(date)}`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ForecastTable;
