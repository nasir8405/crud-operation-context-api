import React from "react";
import { TableData } from "../../Components/User/Table";
import "./index.css";

const StudentsPage = () => {
  return (
    <>
      <h3 className="header">THE MOST FAMOUS ATHLETES IN THE WORLD</h3>
      <div className="container my-5">
        <TableData />
      </div>
    </>
  );
};

export default StudentsPage;
