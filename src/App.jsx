import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPages from "./components/pages/LoginPages";
import Home from "./components/pages/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPages/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
