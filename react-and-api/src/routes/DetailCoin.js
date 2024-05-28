import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailCoin() {
  const { id } = useParams(); // URL에서 id 파라미터를 추출합니다.
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers/${id}`) // 코인 정보를 가져오는 API (예시 URL)
      .then((response) => response.json())
      .then((data) => {
        setCoin(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching coin data:", error));
  }, [id]); // id가 변경될 때마다 이 effect를 다시 실행합니다.

  if (!coin) {
    return <p>Loading...</p>;
  }

  const quotes = coin.quotes.USD;

  return (
    <div>
      <h1>
        {coin.name} ({coin.id})
      </h1>
      <ul>
        <li>Rank: {coin.rank}</li>
        <li>symbol: {coin.symbol}</li>
        <li>total_supply: {coin.total_supply}</li>
        <li>first_data_at: {coin.first_data_at}</li>
        <li>last_updated: {coin.last_updated}</li>
        {Object.keys(quotes).map((key) => (
          <li key={key}>
            {key}: {quotes[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailCoin;
