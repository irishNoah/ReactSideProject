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
    <div className="app-js-container">
      <div className={styles.coinsMainText}>
        <h1>IrishNoah Bit-Coin Information</h1>
      </div>

      <div className={styles.coins}>
        {coin.map((data) => (
          <div key={data.id}>
            <div>
              <p>Coin ID: {data.rank}</p>
              <p>Coin ID: {data.id}</p>
              <p>Coin Name: {data.name}</p>
              <p>Symbol: {data.symbol}</p>
              <p>First Data At: {data.first_data_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainFetchApi;
