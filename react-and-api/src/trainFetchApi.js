import React, { useState, useEffect } from "react";

function TrainFetchApi() {
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCoinData() {
      try {
        const response = await fetch("https://api.coinpaprika.com/v1/tickers");
        const coins = await response.json();
        setCoin(coins[0]);
        console.log(coins[0]);
      } catch (error) {
        setError(error);
        console.error("Error fetching coin data:", error);
      }
    }

    fetchCoinData();
  }, []);

  if (error) {
    return <div>Error fetching coin data: {error.message}</div>;
  }

  if (!coin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="TrainFetchApi">
      <div>
        <h1>Hello Irish</h1>
      </div>
      <div>
        <p>Coin Name: {coin.name}</p>
        <p>Symbol: {coin.symbol}</p>
        <p>First Data At: {coin.first_data_at}</p>
      </div>
    </div>
  );
}

export default TrainFetchApi;
