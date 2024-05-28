import React from "react";
import { Helmet } from "react-helmet";
import "../cssComponents/adminLogin.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AdminForm from "../components/AdminForm";

export default function AdminLogin() {
  return (
    <body className="adminBody">
    <title>Renshu Ink Studio</title>
      <Nav />
      <div className="container">
        <AdminForm />
      </div>
      <Footer />
    </body>
  );
}
