import "./TableData.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import moment from "moment";
import { all_sales, sort_ascending } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";

const TableData = () => {
  const dispatch = useDispatch();
  const table_rows = [];
  let item = useSelector((state) => state.all_sales);
  let sales = item["sales"];
  const is_ascending = useSelector((state) => state.sort_ascending);
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
    let new_data = [...sales];
    if (is_ascending) {
      new_data.sort((a, b) => (a[sorter] > b[sorter] ? 1 : -1));
    } else {
      new_data.sort((a, b) => (a[sorter] > b[sorter] ? -1 : 1));
    }
    dispatch(sort_ascending());
    dispatch(all_sales({ ...item, sales: new_data }));
  };

  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow key={0} style={{ padding: "0px" }}>
              {Object.keys(sales[0]).map((key, index) => (
                <TableCell
                  key={index}
                  align="center"
                  style={{ padding: "10px" }}
                >
                  <input
                    key={index}
                    style={{ cursor: "pointer" }}
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
            {table_rows.map((sale, index) => (
              <TableRow key={index}>
                {Object.values(sale).map((values, index) => (
                  <TableCell key={index} align="center">
                    {values}
                  </TableCell>
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
