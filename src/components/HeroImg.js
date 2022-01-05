import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HeroImg() {
  let history = useNavigate();

  function handleChange(value) {
    history(`/${value}`);
  }

  return (
    <div className="hero-background-image">
      <Container>
        <div className="row justify-content-end ">
          <div className="col-5" style={{ marginTop: "15%" }}>
            <select
              className="form-select"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="">Choose a City</option>
              <option value="DC">District of Columbia - Washington</option>
              <option value="">Miami - Florida</option>
              <option value="3">Laguna Beach - California</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
}
