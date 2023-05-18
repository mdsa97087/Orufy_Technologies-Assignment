import React, { useEffect, useState } from "react";
import "./DataPart.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataReducer } from "../../Redux/AppReducer/AppAction";


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
  const data = useSelector((state: any) => state.data);
  const search = useSelector((state: any) => state.search);


  useEffect(() => {
    dispatch(getDataReducer());
  }, [search]);


  return (
    <div className="DataPartDiv">
      <div>
        <span style={{
          float: 'left',
          fontSize: "medium"
        }}>Home  /  Home decoration  /  Artificial</span>
        <select name="" id="sortBy">
          <option value="">Sort by</option>
          <option value="">Price high to low</option>
          <option value="">Price low to high</option>
        </select>
      </div>
      <br />
      <br />
      {/* -------       DATA FETCHING     ------------- */}

      <div style={{
        display: "flex",
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'space-between',

      }}>
        {
          data.filter((fil: any) => {
            return search.toLocaleLowerCase() === ""
              ? fil :
              fil.title.toLocaleLowerCase().includes(search)
          }

          )
            .map((e: any) => (
              <div key={e.id} style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: '5px'
              }} >
                <img src={e.images} alt={e.title} width={240} height={150} />
                <div style={{
                  textAlign: 'left',
                  padding: '15px'
                }}>

                  <h3>{e.title}</h3>
                  <p>{e.subtitle}</p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <h2>${e.strike_price}</h2>
                    <span style={{
                      textDecoration: 'line-through'
                    }}>
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
            ))
        }
      </div>
    </div>
  );
}

export default DataPart;
