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
    <>
      {state.length !== 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <div>ID</div>
              </th>
              <th>
                <div>Name</div>
              </th>
              <th>
                <div>Game Palyed</div>
              </th>
              <th>
                <div>Country</div>
              </th>
              <th>
                <div>Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div>{item.id}</div>
                  </td>
                  <td>
                    <div>{item.name}</div>
                  </td>
                  <td>
                    <div>{item.gamePlayed}</div>
                  </td>
                  <td>
                    <div>{item.country}</div>
                  </td>
                  <td>
                    <UpdateUser id={item.id} index={index} />
                    <Link
                      to={`/user/${item.id}`}
                      className="btn btn-info ms-2 my-3"
                    >
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
      ) : (
        <div className="item-message">
          Please insert new item, Click on above ADD Button
        </div>
      )}
    </>
  );
};
