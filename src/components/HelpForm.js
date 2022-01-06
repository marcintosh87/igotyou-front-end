import React, { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

export default function HelpForm({ postUser, postHelp }) {
  const userID = Math.floor(Math.random() * 100000000);
  const [formData, setFormData] = useState({
    id: userID,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    profile_url: "",
  });

  const [formDataHelp, setFormDataHelp] = useState({
    title: "",
    h_request: "",
    user_id: userID,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeHelp = (e) => {
    setFormDataHelp({ ...formDataHelp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(formData);
    postHelp(formDataHelp);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      city: "",
      profile_url: "",
    });
  };

  return (
    <Container className="forms" style={{ width: "70%", marginTop: "30px" }}>
      <h1>Submit your information</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="inlineFormInputName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange}
              value={formData.first_name}
              name="first_name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="inlineFormInputNameLast">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              onChange={handleChange}
              value={formData.last_name}
              name="last_name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={formData.email}
              name="email"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="XXX-XXX-XXXX"
              onChange={handleChange}
              value={formData.phone}
              name="phone"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select
              onChange={handleChange}
              name="city"
              value={formData.city}
            >
              <option>Choose...</option>
              <option>District of Columbia</option>
              <option>Laguna Beach</option>
              <option>Miami</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="inlineFormInputName">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://www.backendgivesmeanxiety.jpg"
              onChange={handleChange}
              value={formData.profile_url}
              name="profile_url"
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="FormTitle">
          <Form.Label>Title of Post</Form.Label>
          <Form.Control
            type="text"
            placeholder="Looking for Food"
            onChange={handleChangeHelp}
            value={formDataHelp.title}
            name="title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tell us how we can help</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Help with food for tonight"
            onChange={handleChangeHelp}
            value={formDataHelp.h_request}
            name="h_request"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="got-you-btn">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
