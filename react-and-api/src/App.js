import axios from "axios";
import { useState, useEffect } from "react";

const URL =
  "http://apis.data.go.kr/6430000/cbRecreationalForestInfoService/getRecreationalForestInfo?serviceKey=";

const serviceKey = process.env.REACT_APP_API_KEY; // Get the API key from environment variables

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: serviceKey,
          currentPage: 1,
          perPage: 1,
        },
      });
      setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Service Key:", serviceKey); // Log the service key to the console

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  console.log(data);
  //const name = data.body.items[0].NM;

  return (
    <div className="App">
      <p>길이 : {data.body.length}</p>
      {/* <p>이름 : {data.header.perPage}</p> */}
    </div>
  );
}

export default App;
