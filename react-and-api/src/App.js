import axios from "axios";
import { useState, useEffect } from "react";

const URL =
  "http://apis.data.go.kr/6430000/cbRecreationalForestInfoService/getRecreationalForestInfo?serviceKey=";

const serviceKey = process.env.REACT_APP_API_KEY; // 환경 변수에서 API 키를 가져옵니다

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
          perPage: 4,
        },
      });

      // 응답 데이터가 유효한지 확인합니다
      if (
        response.data &&
        response.data.body &&
        Array.isArray(response.data.body)
      ) {
        setData(response.data);
      } else {
        throw new Error("Invalid API response structure");
      }
    } catch (e) {
      if (e.response) {
        // 서버가 2xx 외의 상태로 응답한 경우
        setError(`Server Error: ${e.response.status}`);
      } else if (e.request) {
        // 요청이 이루어졌지만 응답이 없는 경우 (CORS 문제일 수 있음)
        setError("Network Error: No response received");
      } else {
        // 요청 설정 중에 문제가 발생한 경우
        setError(`Error: ${e.message}`);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Service Key:", serviceKey); // 콘솔에 서비스 키를 출력합니다

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  console.log(data);

  return (
    <div className="App">
      <p>body 길이 : {data.body.length}</p>
      <p>header currentPage : {data.header.currentPage}</p>
      <p>휴양림명 : {data.body[0].NM}</p>
      <p>위치 : {data.body[0].LC}</p>
      <p>면적 : {data.body[0].AR}</p>
    </div>
  );
}

export default App;
