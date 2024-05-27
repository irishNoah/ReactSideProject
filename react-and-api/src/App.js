import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function TrainFetchApi() {
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCoinData() {
      try {
        const response = await fetch("https://api.coinpaprika.com/v1/tickers");
        const coins = await response.json();

        setCoin(coins); // >>> 모두 다 불러옴
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
        <h1>IrishNoah Coin Information</h1>
      </div>

      {coin.map((data) => (
        <div className={styles.container}>
          <div>
            <p>Coin ID: {data.id}</p>
            <p>Coin Name: {data.name}</p>
            <p>Symbol: {data.symbol}</p>
            <p>First Data At: {data.first_data_at}</p>
          </div>
        </div>
      ))}

      {/* <div>
        <p>Coin Name: {coin.name}</p>
        <p>Symbol: {coin.symbol}</p>
        <p>First Data At: {coin.first_data_at}</p>
      </div> */}
    </div>
  );
}

export default TrainFetchApi;
