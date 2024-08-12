import "./App.css";
import { useState } from "react";
function App() {

const[message, setMessage] = useState("Greeting Message");
const thaiMessage = () => {
  setMessage("สวัสดี!");
};
const englishMessage = () => {
  setMessage("Hi!");
};
const chineseMessage = () => {
  setMessage("你好!");
};
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={thaiMessage}>สวัสดี!</button>
        <button onClick={englishMessage}>Hi!</button>
        <button onClick={chineseMessage}>你好!</button>
      </div>
    </div>
  );
}

export default App;
