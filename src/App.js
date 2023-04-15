import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Add from "./components/Add.js";
import Edit from "./components/Edit.js";

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={ <Add/> } />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
