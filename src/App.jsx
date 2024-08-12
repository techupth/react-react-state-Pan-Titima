import "./App.css";
import { useState } from "react";
function App() {

const[message, setMessage] = useState("Greeting Message");
const handleClick = (message) => {
  setMessage(message);
};

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={() => handleClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleClick("Hi!")}>Hi!</button>
        <button onClick={() => handleClick("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
