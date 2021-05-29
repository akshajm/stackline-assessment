import "./Homepage.css";

import Sidebar from "../Sidebar/Sidebar";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* {console.log(Sales)} */}
      <Sidebar />

      {/* Right Side */}
      <div className="homepage__sales">
        <div className="graph">
          <h1>Akshaj</h1>
        </div>
        <div className="table">
          <h1>Maldikar</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
