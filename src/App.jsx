import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import Home from "./pages/home/Home";
import Menu from "./shop/Menu";
import { Login } from "./components/Login";
import Categories from "./pages/home/Categories";
import { All } from "./components/category/All";

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/allproducts" element={<All />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
