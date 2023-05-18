import React from "react";
import "./SidePart.css";

function SidePart() {
  return (
    <div className="sidePartDiv">
      <div
        style={{
          // border:"1px solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Filter</h3>
        <img
          width={50}
          src="https://t3.ftcdn.net/jpg/04/02/77/08/240_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg"
          alt=""
        />
      </div>
      <hr /><br />
      <div>
        <p className="sidePartPtag">Brand</p>
        <input type="checkbox" /> <span>Number A</span>
        <br />
        <input type="checkbox" /> <span>Brand 2</span>
        <br />
        <input type="checkbox" /> <span>Brand C</span>
        <br />
        <input type="checkbox" /> <span>Miracle</span>
        <br />
        <input type="checkbox" /> <span>Empty</span>
      </div>
      <br />
      <div>
        <p className="sidePartPtag">Category</p>
        <input type="checkbox" /> <span>Number A</span>
        <br />
        <input type="checkbox" /> <span>Brand 2</span>
        <br />
        <input type="checkbox" /> <span>Brand C</span>
        <br />
        <input type="checkbox" /> <span>Miracle</span>
        <br />
        <input type="checkbox" /> <span>Empty</span>
      </div>
      <br />
      <div>
        <p className="sidePartPtag">Price</p>
        <input type="checkbox" /> <span> &lt; $100 </span>
        <br />
        <input type="checkbox" /> <span>$100 - $199</span>
        <br />
        <input type="checkbox" /> <span>$200 - $599</span>
        <br />
        <input type="checkbox" /> <span>$600 - $999</span>
        <br />
        <input type="checkbox" /> <span>&gt; $1000</span>
      </div>
    </div>
  );
}

export default SidePart;
