import "./TableData.css";
import Sales from "../../data/stackline_frontend_assessment_data_2021";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import moment from "moment";

const TableData = () => {
  const table_rows = [];
  let sales = Sales[0].sales;
  sales.forEach((sale) => {
    var date = moment(sale.weekEnding).format("MM-DD-YYYY");
    var retail = (
      <NumberFormat
        value={sale.retailSales}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    );
    var wholesale = (
      <NumberFormat
        value={sale.wholesaleSales}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    );
    var retail_margin = (
      <NumberFormat
        value={sale.retailerMargin}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    );
    var units_sold = sale.unitsSold;

    table_rows.push({ date, retail, wholesale, units_sold, retail_margin });
  });

  const sort_rows = (event) => {
    let sorter = event.target.value;
    sales.sort((a, b) =>
      a[sorter] > b[sorter] ? 1 : b[sorter] > a[sorter] ? -1 : 0
    );
    console.log(sales);
  };

  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ padding: "0px" }}>
              {Object.keys(Sales[0].sales[0]).map((key) => (
                <TableCell align="center" style={{ padding: "10px" }}>
                  <input
                    type="button"
                    onClick={(event) => {
                      sort_rows(event);
                    }}
                    value={key}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {table_rows.map((sale) => (
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
