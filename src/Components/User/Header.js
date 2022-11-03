import React from "react";
import { Link } from "react-router-dom";
import { AddUser } from "./AddUser";

export const Header = () => {
  return (
    <div className="bg-dark">
      <div className="container text-white d-flex p-2 justify-content-between">
        <Link to="/" className="header-link">
          <h3>CRUD APP</h3>
        </Link>
        <AddUser />
      </div>
    </div>
  );
};
