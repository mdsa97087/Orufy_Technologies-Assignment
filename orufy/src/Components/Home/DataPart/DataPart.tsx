import React, { useEffect, useState } from "react";
import "./DataPart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBrand,
  getDataReducer,
  sortProducts,
} from "../../Redux/AppReducer/AppAction";
import StarRating from "../StarRating/StarRating";

interface apiData {
  id: number;
  brand: string;
  category: string;
  discount: string;
  discounted_price: string;
  images: string;
  rating: string;
  rating_count: string;
  strike_price: string;
  subtitle: string;
  title: string;
}

function DataPart() {
  const dispatch = useDispatch();
  var data = useSelector((state: any) => state.data);
  const search = useSelector((state: any) => state.search);
  const sort = useSelector((state: any) => state.sort);
  const brand = useSelector((state: any) => state.brand);
  const category = useSelector((state: any) => state.category);
  const price = useSelector((state: any) => state.price);

  useEffect(() => {
    dispatch(getDataReducer());
  }, [dispatch]);

  // const handleSortChange = (e) => {
  //   const selectedSort = e.target.value;
  //   dispatch(sortProducts(selectedSort));
  // };

  //  ``````````````````` SORTING AND FILTERING     ``````````

  let sortedProducts = [...data];
  if (sort === "highToLow") {
    sortedProducts = sortedProducts.sort(
      (a, b) => b.strike_price - a.strike_price
    );
  } else if (sort === "lowToHigh") {
    sortedProducts = sortedProducts.sort(
      (a, b) => a.strike_price - b.strike_price
    );
  }

  const filteredProducts = sortedProducts.filter((product) => {
    if (brand === "Number A") {
      return product.brand === "Number A";
    }
    if (brand === "Brand 2") {
      return product.brand === "Brand 2";
    }
    if (brand === "Brand C") {
      return product.brand === "Brand C";
    }
    if (brand === "Miracle") {
      return product.brand === "Miracle";
    }
    if (brand === "Empty") {
      return sortedProducts;
    }

    //  ``````````````  category `      ````````

    if (category === "Number A") {
      return product.category === "Number A";
    }
    if (category === "Brand 2") {
      return product.category === "Brand 2";
    }
    if (category === "Brand C") {
      return product.category === "Brand C";
    }
    if (category === "Miracle") {
      return product.category === "Miracle";
    }
    if (category === "Empty") {
      return sortedProducts;
    }

    // `````````````    price    ``````````

    if (price === "under100") {
      return product.strike_price < 100;
    }
    if (price === "100to199") {
      return product.strike_price >= 100 && product.strike_price <= 199;
    }
    if (price === "200to599") {
      return product.strike_price >= 200 && product.strike_price <= 599;
    }
    if (price === "600to999") {
      return product.strike_price >= 600 && product.strike_price <= 999;
    }
    if (price === "above1000") {
      return product.strike_price > 1000;
    } else {
      return sortedProducts;
    }
  });

  return (
    <div className="DataPartDiv">
      <div>
        <span
          style={{
            float: "left",
            fontSize: "medium",
          }}
        >
          Home / Home decoration / Artificial
        </span>

        <select
          id="sort"
          value={sort}
          onChange={(e) => dispatch(sortProducts(e.target.value))}
        >
          <option value="">Sort by</option>
          <option value="highToLow">Price high to low</option>
          <option value="lowToHigh">Price low to high</option>
        </select>
      </div>
      <br />
      <br />
      {/* -------       DATA FETCHING     ------------- */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        {filteredProducts
          .filter((fil: any) => {
            return search.toLocaleLowerCase() === ""
              ? fil
              : fil.title.toLocaleLowerCase().includes(search);
          })
          .map((e: any) => (
            <div
              key={e.id}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "5px",
              }}
            >
              <img src={e.images} alt={e.title} width={240} height={150} />
              <div
                style={{
                  textAlign: "left",
                  padding: "15px",
                }}
              >
                <h3>{e.title}</h3>
                <p>{e.subtitle}</p>
                <StarRating rating={e.rating} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <h2>${e.strike_price}</h2>
                  <span
                    style={{
                      textDecoration: "line-through",
                    }}
                  >
                    ${e.discounted_price}
                  </span>
                  <span
                    style={{
                      color: "green",
                      fontWeight: "700",
                    }}
                  >
                    {e.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DataPart;
