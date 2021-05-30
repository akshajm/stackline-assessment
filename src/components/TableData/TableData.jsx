import "./TableData.css";
import Sales from "../../data/stackline_frontend_assessment_data_2021";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TableData = () => {
  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(Sales[0].sales[0]).map((key) => (
                <TableCell align="center">{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Sales[0].sales.map((sale) => (
              <TableRow>
                {Object.values(sale).map((values) => (
                  <TableCell align="center">{values}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Table />
    </div>
  );
};

export default TableData;
