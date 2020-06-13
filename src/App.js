import React, { useState, useEffect } from "react";
import { fetchAdvice } from "./FetchAdvice";
import "./App.css";
function App() {
  const [advice, setadvice] = useState("");

  const getData = async () => {
    const { data } = await fetchAdvice();
    const advice = data.slip.advice;
    setadvice(advice);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={getData}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
