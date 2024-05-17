async function trainFetchApi() {
  try {
    const response = await fetch("https://api.coinpaprika.com/v1/tickers");
    const coins = await response.json();

    // 성능 향상을 위해 필요한 만큼의 데이터만 가져오기
    const topCoins = coins.slice(0, 100);

    topCoins.forEach((coin, index) => {
      console.group(`Coin ${index + 1}`);
      console.log(`hello`);
      console.log(`Coin Name: ${coin.name}`);
      console.log(`Symbol: ${coin.symbol}`);
      console.log(`First Data At: ${coin.first_data_at}`);
      console.log(`Max Supply: ${coin.max_supply}`);
      console.log(`Total Supply: ${coin.total_supply}`);
      console.groupEnd();
      console.log("==========================================");
    });
  } catch (error) {
    console.error("Error fetching coin data:", error);
  }
}

trainFetchApi();
