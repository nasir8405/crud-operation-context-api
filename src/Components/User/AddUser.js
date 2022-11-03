import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Context } from "../../Pages/Users/UsersProvider";

export const AddUser = () => {
  const context = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let id = context.state.length;
  const [user, setUser] = useState({
    id: id + 1,
    name: "",
    profession: "",
    country: "",
  });
  const { name, profession, country } = user;
  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    context.dispatch({ type: "ADD", payload: user });
    setUser({ name: "", profession: "", country: "" });
    handleClose();
  };
  return (
    <>
      <Button variant="primary px-5" onClick={handleShow}>
        ADD
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => onHandleChange(e)}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                name="profession"
                value={profession}
                onChange={(e) => onHandleChange(e)}
                placeholder="Enter Your Profession"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={country}
                onChange={(e) => onHandleChange(e)}
                placeholder="Enter Your Country"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
