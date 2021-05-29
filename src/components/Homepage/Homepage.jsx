import "./Homepage.css";

import Sidebar from "../Sidebar/Sidebar";
import Visuals from "../Visuals/Visuals";

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Visuals />
    </div>
  );
};

export default Homepage;
