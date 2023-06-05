import React, { useState } from "react";

function App() {
  //setInterval(showTime, 1000);

  let currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  function showTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    console.log(currentTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
