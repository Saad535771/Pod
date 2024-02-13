import "./App.scss";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "./components/home/Home";
import Forget from "./components/forget/Forget";
import Login from "./components/login/Main";
import Verification from "./components/forget/codeverification/Verification";
import ResetPassword from "./components/forget/reset-password/ResetPassword";
import Signup from "./components/signup/Signup";
import ProductManagement from "./components/productmanagement/ProductManagement";
import ProductList from "./components/productlist/ProductList";
import OrderManagement from "./components/ordermanagement/OrderManagement";
import setupLocatorUI from "@locator/runtime";
import Header from "./components/header/Header";
if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}
function App() {
  return (
    <Router>
        <Routes>
          <Route path={routes.HOME} element={<Home/>} >
          <Route path={routes.HOME} element={<ProductManagement />} />
          <Route path={routes.PRODUCTLIST} element={<ProductList />} />
          <Route path={routes.ORDERMANAGEMENT} element={<OrderManagement />} />
          
          </Route>
          
          {/* Login */}
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.SIGNUP} element={<Signup />} />
          <Route path={routes.FORGET_PASSWORD} element={<Forget />} />
          <Route path={routes.VERIFICATION_CODE} element={<Verification />} />
          <Route path={routes.RESET_PASSWORD} element={<ResetPassword />} />

          <Route path="*" element={<Signup/>} />
        </Routes>
      {/* </SideBar> */}
    </Router>
  );
}

export default App;
