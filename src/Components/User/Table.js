import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Context } from "../../Pages/Users/UsersProvider";
import { UpdateUser } from "./UpdateUser";

export const TableData = () => {
  const context = useContext(Context);
  const { state } = context;
  const deleteUser = (id) => {
    context.dispatch({ type: "DELETE", payload: id });
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Profession</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {state.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.profession}</td>
              <td>{item.country}</td>
              <td>
                <UpdateUser id={item.id} index={index} />
                <Link to={`/user/${item.id}`} className="btn btn-info ms-2">
                  View
                </Link>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => deleteUser(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
