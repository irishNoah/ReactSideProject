import React, { useState, useEffect } from "react";
import styles from "./HomeCoin.module.css";
import HomeCoinInfo from "../components/HomeCoinInfo";

function HomeCoin() {
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
    <div className="HomeCoin-js-container">
      <div className={styles.coinsMainText}>
        <h1>IrishNoah Bit-Coin Information</h1>
      </div>

      <div className={styles.coins}>
        {coin.map((data) => (
          <div className={styles.eachCoin}>
            <div>
              <HomeCoinInfo
                rank={data.rank}
                id={data.id}
                name={data.name}
                symbol={data.symbol}
                first_data_at={data.first_data_at}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCoin;
