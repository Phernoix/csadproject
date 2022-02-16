import React from "react";
//import "./App.css";
import { JsonData } from "../data";

export const Stocks = () => {
    return (
      <>
        <div className="stock-container">
          {JsonData.map((data, key) => {
            return (
              <div key={key}>
                <Stock
                  key={key}
                  warning={data.warning}
                  safetymeasure={data.safetymeasure}

                />
              </div>
            );
          })}
        </div>
      </>
    );
  };
export default Stocks;
  const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Your covid Tracker</h2>
      </header>
    );
  };


const Stock = ({warning,safetymeasure}) => {
  if (!warning) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{warning}</h5>
          </td>
          <td>
            <h5>{safetymeasure}</h5>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
