import Graph from "../Graph/Graph";
import TableData from "../TableData/TableData";
import "./Visuals.css";
import { Typography } from "@material-ui/core";

const Visuals = () => {
  return (
    <div className="homepage__sales">
      <Typography variant="h6" component="h6">
        Retail Sales
      </Typography>
      <Graph />
      <TableData />
    </div>
  );
};

export default Visuals;
