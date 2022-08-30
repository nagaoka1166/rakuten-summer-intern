import React, { useEffect, useState } from "react"
import { useData } from "../hooks/useData";

const SearchResultPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const {fetchData, setOption, plans, fetchCurrentLocation, latitude, longitude} = useData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchData, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
        latitude: {latitude}
        </p>
        <p>
        longitude: {longitude}
        </p>
        {plans.map((plan) => (
        <>
        <p>プラン名：{plan.name}</p>
        <p>ホテル名：{plan.hotelName}</p>
        <p>部屋名：{plan.roomName}</p>
        <p>距離：{plan.distance}km</p>
        <p>料金：{plan.charge}円</p>
        <p>URL：{plan.reserveURL}</p>
        <br />
        </>
        )
        )}
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default SearchResultPage;