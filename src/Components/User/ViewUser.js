import React, { useContext } from "react";
import { Context } from "../../Pages/Users/UsersProvider";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ViewUser = () => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const params = useParams();
  const user = context.state.find((item) => {
    return item.id === params.id;
  });
  return (
    <div className="container viewTable my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Profession</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.profession}</td>
            <td>{user.country}</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-center my-4">
        <Button className="btn btn-dark" onClick={() => navigate("/")}>
          Home
        </Button>
      </div>
    </div>
  );
};
