// src/routes/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Homepage from "../Pages/Homepage";
import Profile from "../Pages/Profile";
import Recommendations from "../Pages/Recommendations";
import Savedproject from "../Pages/Savedproject";
import CommingSoon from "../Pages/CommingSoon";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import FilmsPage from "../Pages/Films";
import FilmsDetailsComponent from "../Pages/Films/FilmsDetails/FilmsDetails";
import Start from "../Pages/Start/Start";
import Project from "../Pages/Start/Project/Project";
import Edit from "../Pages/Start/Project/Edit/Edit";
import Category from "../Pages/Films/FilmsDetails/Category/Category";
import ForgotPassword from "../Components/ForgotPassword";
import ResetPassword from "../Components/ResetPassword";
import { ScrollToTop } from "../libs/functions";
import AuthGuard from "../libs/authGuard";

const AllRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/film/:id" element={<FilmsDetailsComponent />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/profile/savedprojects" element={<Savedproject />} />
        <Route path="/create-project" element={<CommingSoon />} />
        <Route path="/project" element={<Project />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/start" element={<AuthGuard><Start /></AuthGuard>} />
        <Route
          path="/edit/:id"
          element={
            <AuthGuard>
              <Edit />
            </AuthGuard>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
