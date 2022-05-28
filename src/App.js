import "./styles.css";
import { useState } from "react";

export default function App() {
  const [btn, setBtn] = useState("off");
  const [btnText, setBtnText] = useState("Off");

  const btnHandler = () => {
    if (btn === "off") {
      setBtn("looping playlist");
      setBtnText("Loop Playlist");
    } else if (btn === "looping playlist") {
      setBtn("loop this song");
      setBtnText("Loop Song");
    } else if (btn === "loop this song") {
      setBtn("off");
      setBtnText("Off");
    }
  };
  console.log(btn);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={btnHandler}>{btnText}</button>
    </div>
  );
}
