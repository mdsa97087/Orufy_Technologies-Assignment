import React from "react";
import "./DataPart.css";

function DataPart() {
  return (
    <div className="DataPartDiv">
      <div>
        <span style={{
            float:'left',
            fontSize: "medium"
        }}>Home  /  Home decoration  /  Artificial</span>
        <select name="" id="sortBy">
          <option value="">Sort by</option>
          <option value="">Price high to low</option>
          <option value="">Price low to high</option>
        </select>
      </div>
    </div>
  );
}

export default DataPart;
