import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import UserLayout from "../layouts/UserLayout";
import ProductDetails from "../pages/ProductDetails";
import Blogs from "../pages/Blogs";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "../components/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />

        {/* protected */}
        <Route
          path="/aaa/products"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aaa/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
