import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

import Header from "./components/Header";

import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");

  async function greet(name) {
    console.log("")
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  return (
    <div className="container">
      {/* Header with example of calling a rust function from front end */}
      <Header greetFn={greet}/>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
