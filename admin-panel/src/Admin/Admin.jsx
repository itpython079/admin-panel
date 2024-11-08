import React from "react";
import "./Admin.scss";
import profil from "../images/Profile.svg";

const Admin = () => {
  return (
    <section className="admin">
      <div className="container">
        <div className="admin__black">
          <div className="admin__left">
            <img src={profil} alt="profil" />
            <h2>Alibek</h2>
            <h4>alibek@mail.com</h4>
            <div className="admin__menu">
              <h3>Dashboard</h3>
              <h3>Accounts</h3>
              <h3>Settings</h3>
              <h3>Products</h3>
              <h3>Recipe</h3>
              <h3>Users</h3>
              <h3>News</h3>
            </div>
          </div>
          <div className="admin__white"></div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
