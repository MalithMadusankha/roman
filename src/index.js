import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Index from "views/Index";
import ManageUser from "views/user/ManageUser";
import Membership from "views/Membership";
import Welcome from "views/user/Welcome";
import Login from "views/user/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="index" element={<Index />} />
        <Route path="users" element={<ManageUser />} />
        <Route path="membership" element={<Membership />} />
        <Route path="offers" element={<ManageUser />} />
      </Route>
      <Route path="/auth/*" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/welcome" element={<Welcome />} />
      <Route from="/" element={<Navigate replace to="/admin/index" />} />
    </Routes>
  </BrowserRouter>
);
