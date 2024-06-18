import React from 'react';

const BestBidComponents = ({bestBid,bestAsk,bidQuantity,askQuantity}) => {

  return (
    <div
    style={{
      display: "flex",
      width: "90%",
      margin: "0 auto",
      justifyContent:'space-around',
      marginTop:'64px'
    }}
  >
    <div style={{  width: "45%" }}>
      <div
        style={{
          background: "#009FCE",
          color: "white",
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: "0" }}>Best Bid: ibit</h2>
      </div>

      <div style={{display:'flex'}}>
        <div style={{width:'50%',border:'1px solid #e1e4e6 '}}>
          <p style={{marginLeft:'32px'}}>
          {bestBid ? bestBid : "N/A"}
          </p>
          <p style={{marginLeft:'32px'}}>bid Price</p>
        </div>

        <div style={{width:'50%',border:'1px solid #e1e4e6 '}}>
          <p style={{marginLeft:'32px'}}>
          {bidQuantity ? bidQuantity : "N/A"}
          </p>
          <p style={{marginLeft:'32px'}}>bid Quantity</p>
        </div>
      </div>
    </div>


    <div style={{  width: "45%" ,}}>
      <div
        style={{
          background: "#FCB146",
          color: "white",
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: "0" }}>Best Ask: kraken</h2>
      </div>

      <div style={{display:'flex'}}>
        <div style={{width:'50%',border:'1px solid #e1e4e6 '}}>
          <p style={{marginLeft:'32px'}}>
          {bestAsk ? bestAsk : "N/A"}
          </p>
          <p style={{marginLeft:'32px'}}>Ask Price</p>
        </div>
        <div style={{width:'50%',border:'1px solid #e1e4e6 '}}>
          <p style={{marginLeft:'32px'}}>
          {askQuantity ? askQuantity : "N/A"}
          </p>
          <p style={{marginLeft:'32px'}}>Ask Quantity</p>
        </div>
      </div>
    </div>


  </div>
  );
};

export default BestBidComponents;
