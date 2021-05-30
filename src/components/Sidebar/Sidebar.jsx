import { Button } from "@material-ui/core";
import "./Sidebar.css";
import { item_data } from "../../reducer/all_sales";
import { Typography } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="item" key={item_data.id}>
        <div className="item__data">
          <div className="item__data__image">
            <img src={item_data.image} alt="Item logo" className="sale__img" />
          </div>
          <div className="item__data__title">
            <Typography variant="h6" component="h6" key={item_data.id}>
              {item_data.title}
            </Typography>
          </div>
          <div className="item__data__subtitle">
            <Typography color="textSecondary">{item_data.subtitle}</Typography>
          </div>
        </div>
        <hr />
        <div className="item__tags">
          {item_data.tags.map((tag, tag_index) => {
            return (
              <Button variant="outlined" key={tag_index}>
                {tag}
              </Button>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
