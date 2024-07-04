import React from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuote(json[0]);
        setQuotes(json);
      });
  }, []);

  function RandQ(quotes) {
    let a = Math.floor(Math.random() * quotes.length);
    
    return quotes[a];
  }
  function Rq() {
    setQuote(RandQ(quotes));
  }
  return (
    <div>
      <button
        style={{
          borderRadius: "10px",
          border: "none",
          backgroundColor: "rgb(133, 229, 232)",
          color: "#000000",
          padding: "10px",
          fontWeight: "bold",
        }}
        onClick={Rq}
      >
        change the Quote
      </button>
      <h1>{quote?.text}</h1>
      <h2 style={{ textAlign: "right" }}>-{quote?.author}</h2>
    </div>
  );
}
