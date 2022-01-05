import React, { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

export default function GratForm({ postUser, postGrat }) {
  const userID = Math.floor(Math.random() * 100000000);
  const [formData, setFormData] = useState({
    id: userID,
    first_name: "",
    last_name: "",

    city: "",
    profile_url: "",
  });

  const [formDataGrat, setFormDataGrat] = useState({
    likes: 0,
    comment: "",
    user_id: userID,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeHelp = (e) => {
    setFormDataGrat({ ...formDataGrat, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(formData);

    postGrat(formDataGrat);
    setFormData({
      first_name: "",
      last_name: "",

      city: "",
      profile_url: "",
    });
    setFormDataGrat({
      comment: "",
    });
  };

  return (
    <Container className="forms" style={{ width: "70%", marginTop: "30px" }}>
      <h1>Gratitude Post</h1>
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
        </Row>

        <Row className="mb-3">
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
            <Form.Label>Profile Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://www.backendgivesmeanxiety.jpg"
              onChange={handleChange}
              value={formData.profile_url}
              name="profile_url"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>What are you thankful for?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Someone gave me some wine"
            onChange={handleChangeHelp}
            value={formDataGrat.comment}
            name="comment"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="got-you-btn">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
