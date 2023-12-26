import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import Home from "./pages/home/Home";
import Menu from "./shop/Menu";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
