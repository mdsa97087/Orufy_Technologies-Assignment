import React from "react";
import "./SidePart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBrand,
  filterPrice,
  filtercategory,
} from "../../Redux/AppReducer/AppAction";

function SidePart() {
  const dispatch = useDispatch();
  const brand = useSelector((state: any) => state.brand);
  const category = useSelector((state: any) => state.category);
  const price = useSelector((state: any) => state.price);

  const handleFilterBrand = (e: any) => {
    const selectedBrand = e.target.value;
    dispatch(filterBrand(selectedBrand));
  };

  const handleFilterCategory = (e: any) => {
    const selectedCategory = e.target.value;
    dispatch(filtercategory(selectedCategory));
  };
  const handleFilterPrice = (e: any) => {
    const selectedPrice = e.target.value;
    dispatch(filterPrice(selectedPrice));
  };

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
      <hr />
      <br />
      {/*     ``````````          BRAND     ``````` */}
      <div>
        <p className="sidePartPtag">Brand</p>
        <input
          type="checkbox"
          value={"Number A"}
          onChange={handleFilterBrand}
          checked={brand == "Number A" ? true : false}
        />{" "}
        <span>Number A</span>
        <br />
        <input
          type="checkbox"
          value={"Brand 2"}
          onChange={handleFilterBrand}
          checked={brand == "Brand 2" ? true : false}
        />{" "}
        <span>Brand 2</span>
        <br />
        <input
          type="checkbox"
          value={"Brand C"}
          onChange={handleFilterBrand}
          checked={brand == "Brand C" ? true : false}
        />{" "}
        <span>Brand C</span>
        <br />
        <input
          type="checkbox"
          value={"Miracle"}
          onChange={handleFilterBrand}
          checked={brand == "Miracle" ? true : false}
        />{" "}
        <span>Miracle</span>
        <br />
        <input
          type="checkbox"
          value={"Empty"}
          onChange={handleFilterBrand}
          checked={brand == "Empty" ? true : false}
        />{" "}
        <span>Empty</span>
      </div>
      <br />

      {/*         ````````````      CATEGORY    ````````` */}
      <div>
        <p className="sidePartPtag">Category</p>
        <input
          type="checkbox"
          value={"Number A"}
          onChange={handleFilterCategory}
          checked={category == "Number A" ? true : false}
        />{" "}
        <span>Number A</span>
        <br />
        <input
          type="checkbox"
          value={"Brand 2"}
          onChange={handleFilterCategory}
          checked={category == "Brand 2" ? true : false}
        />{" "}
        <span>Brand 2</span>
        <br />
        <input
          type="checkbox"
          value={"Brand C"}
          onChange={handleFilterCategory}
          checked={category == "Brand C" ? true : false}
        />{" "}
        <span>Brand C</span>
        <br />
        <input
          type="checkbox"
          value={"Miracle"}
          onChange={handleFilterCategory}
          checked={category == "Miracle" ? true : false}
        />{" "}
        <span>Miracle</span>
        <br />
        <input
          type="checkbox"
          value={"Empty"}
          onChange={handleFilterCategory}
          checked={category == "Empty" ? true : false}
        />{" "}
        <span>Empty</span>
      </div>
      <br />

      {/*     ````````````        PRICE     ````````````  */}
      <div>
        <p className="sidePartPtag">Price</p>
        <input
          type="checkbox"
          value={"under100"}
          onChange={handleFilterPrice}
          checked={price == "under100" ? true : false}
        />{" "}
        <span> &lt; $100 </span>
        <br />
        <input
          type="checkbox"
          value={"100to199"}
          onChange={handleFilterPrice}
          checked={price == "100to199" ? true : false}
        />{" "}
        <span>$100 - $199</span>
        <br />
        <input
          type="checkbox"
          value={"200to599"}
          onChange={handleFilterPrice}
          checked={price == "200to599" ? true : false}
        />{" "}
        <span>$200 - $599</span>
        <br />
        <input
          type="checkbox"
          value={"600to999"}
          onChange={handleFilterPrice}
          checked={price == "600to999" ? true : false}
        />{" "}
        <span>$600 - $999</span>
        <br />
        <input
          type="checkbox"
          value={"above1000"}
          onChange={handleFilterPrice}
          checked={price == "above1000" ? true : false}
        />{" "}
        <span>&gt; $1000</span>
      </div>
    </div>
  );
}

export default SidePart;
