import React, { useState, useEffect } from "react";
import axios from "axios";

function SimpleApiExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 요청을 보내는 함수
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setData(response.data); // 응답 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchData();
  }, []);

  // 데이터 로딩 중이거나 없을 때의 처리
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default SimpleApiExample;
