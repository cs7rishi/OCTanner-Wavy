import React from "react";
import "../css/timeline.css";
// import "../css/vendor/normalize.min.css";
export default class Timeline extends React.Component {
  render() {
    return (
      <>
        {/* !--BLOB-- */}
        <div className="wrapper-border">
          <div className="blob "></div>
        </div>
        <div>
          <div className="blob2 "></div>
        </div>
        <div>
          <div className="blob3 "></div>
        </div>
        <div className="coming-soon">
          <h1>Coming Soon!!!</h1>
          <h2>Due to faulty CSS code</h2>
        </div>
      </>
    );
  }
}
