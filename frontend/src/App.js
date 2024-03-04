import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chats from "./Pages/Chats";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
