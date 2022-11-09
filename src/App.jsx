import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/> 
        <Route path="/register" element={<Register />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
