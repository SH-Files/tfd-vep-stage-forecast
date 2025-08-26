import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatCountDown, formatDate } from "../utils/formatting";

const ForecastTable = ({ data }: any) => {
  return (
    <Table component={Paper}>
      <TableHead>
        <TableRow>
          <TableCell width={400}>Stage name</TableCell>
          <TableCell align="center">
            <span style={{ color: "#6fbf73" }}>Stage active since</span> / Stage
            spawns in
          </TableCell>
          <TableCell align="center">Spawn date</TableCell>
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
                width={400}
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
              >{`${formatDate(date)}`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ForecastTable;
