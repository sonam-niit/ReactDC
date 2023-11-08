import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import { useEffect, useState} from "react";
import Details from "./components/Details";

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="text-center">User Management System</h1>

        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/details/:id" element={<Details />}  ></Route>
          <Route path="/products/:category" element={<Products />}  ></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
