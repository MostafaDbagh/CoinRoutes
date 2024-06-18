import React from 'react';
import './style.css';

const LadderView = ({bidData,askData}) => {
  const maxRows = 10;

  const sortedBidData = [...bidData].sort((a, b) => b.price - a.price).slice(0, maxRows);
  const sortedAskData = [...askData].sort((a, b) => a.price - b.price).slice(0, maxRows);

{console.log(bidData,'fuck BidDta')}
  return (
    <div className="ladder-view">
      <h2>Order Book Ladder View</h2>
      <div className="ladder-table">
        <div className="ladder-column">
          <table>
            <thead>
              <tr>
                <th>Market Size</th>
                <th>Price (USD)</th>
          
              </tr>
            </thead>
            <tbody>
              {sortedBidData.map((bid, index) => (
                <tr key={index}>
                  <td>{bid.size}</td>
                  <td>{bid.price}</td>
          
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ladder-column">
          <table>
            <thead>
              <tr>
                <th>Market Size</th>
                <th>Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              {sortedAskData.map((ask, index) => (
                <tr key={index}>
                  <td>{ask.size}</td>
                  <td>{ask.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default LadderView;
