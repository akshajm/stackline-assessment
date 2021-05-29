import { Button } from "@material-ui/core";
import "./Sidebar.css";
import Sales from "../../data/stackline_frontend_assessment_data_2021";
import { Typography } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {Sales.map((sale) => {
        return (
          <div className="item" key={sale.id}>
            <div className="item__data">
              <div className="item__data__image">
                <img src={sale.image} alt="Item logo" className="sale__img" />
              </div>
              <div className="item__data__title">
                <Typography variant="h6" component="h6" key={sale.id}>
                  {sale.title}
                </Typography>
              </div>
              <div className="item__data__subtitle">
                <Typography color="textSecondary">{sale.subtitle}</Typography>
              </div>
            </div>
            <hr />
            <div className="item__tags">
              {sale.tags.map((tag, tag_index) => {
                return (
                  <Button variant="outlined" key={tag_index}>
                    {tag}
                  </Button>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
