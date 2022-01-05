import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import profileImg from "./../img/default_img.png";

export default function HelpCard({
  title,
  image = profileImg,
  request,
  created_at,
  phone,
  email,
  name,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="col">
        <div className="card h-100">
          <img
            src={image === "" ? profileImg : image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{request}</p>
            <Button className="got-you-btn" onClick={handleShow}>
              I Got You
            </Button>
          </div>
          <div className="card-footer">
            <small className="text-muted">Created {created_at}</small>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <img
          src={image === "" ? profileImg : image}
          className="card-img-top"
          alt="..."
        />
        <Offcanvas.Body>
          {request} <br />
          <br />
          <h4>Contact Information</h4>
          <p>Name: {name}</p>
          <p>
            Phone: <a href={`tel:+${phone}`}>{phone}</a>
          </p>
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
