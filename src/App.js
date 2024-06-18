import React, { useEffect, useState, useRef } from "react";
import PriceChart from "./components/priceChart";
import LadderView from "./components/ladderChart";
import CurrencyDropDown from "./components/dropdown/currencyDropdown";
import BestBidComponents from "./components/BookPrice";
const App = () => {
  const [currency, setCurrency] = useState("BTC-USD");
  const [aggregation, setAggregation] = useState(0.01);

  const [bidData, setBidData] = useState([]);
  const [askData, setAskData] = useState([]);
  const [bestBid, setBestBid] = useState(null);
  const [bestAsk, setBestAsk] = useState(null);

  const [bidQuantity, setBidQuantity] = useState(null);
  const [askQuantity, setAskQuantity] = useState(null);

  const [isConnected, setIsConnected] = useState(true); 
  const ws = useRef(null);

  useEffect(() => {
    const connectWebSocket = () => {
      ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

      ws.current.onopen = () => {
        console.log("Connected to Coinbase WebSocket");

        const subscribeMessage = {
          type: "subscribe",
          product_ids: [currency],
          channels: ["ticker"],
        };

        ws.current.send(JSON.stringify(subscribeMessage));
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "ticker") {
        
          const time = new Date().toLocaleTimeString();
          const bidSize = parseFloat(data?.best_bid_size);
          const askSize = parseFloat(data?.best_ask_size);

          const bidPrice = parseFloat(data?.best_bid);
          const askPrice = parseFloat(data?.best_ask);

          setBidData((prevData) => [...prevData, { price: bidPrice,size: bidSize ,time}]);
          setAskData((prevData) => [...prevData, {  price: askPrice,size:askSize,time }]);

          setBestBid(bidPrice);
          setBestAsk(askPrice);

          setBidQuantity(bidSize)
          setAskQuantity(askSize)
        }
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.current.onclose = () => {
        console.log("WebSocket connection closed");
      };
    };

    if (isConnected) {
      connectWebSocket();
    }

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [isConnected]);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
  };


  return (
    <div>
<h1 style={{textAlign:'center'}}>CoinRoutes Assignment By Mostafa Dbagh</h1>
    <BestBidComponents
     bestBid={bestBid}
      bestAsk={bestAsk}
      bidQuantity={bidQuantity}
      askQuantity={askQuantity}
      />
      <CurrencyDropDown
        currency={currency}
        handleChangeCurrency={handleCurrencyChange}
      />
      <PriceChart bidData={bidData} askData={askData} />
      <LadderView
        bidData={bidData}
        askData={askData}
        aggregation={aggregation}
      
      />
    </div>
  );
};

export default App;
