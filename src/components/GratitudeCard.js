import React, { useState, useEffect } from "react";
import profileImg from "./../img/default_img.png";
import { Container } from "react-bootstrap";
import { HeartFill, Heart } from "react-bootstrap-icons";

export default function GratitudeCard({
  name = "Branden",
  image = profileImg,
  comment,
  likes,
}) {
  const [newLike, setNewLike] = useState(parseInt(likes));
  const [formData, setFormData] = useState({
    likes: newLike + 1,
  });

  const patchGrat = (gratD) => {
    fetch(`http://localhost:9292/gratitude/6`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...gratD, likes: newLike }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData(
          gratD.map((p) => {
            if (gratD.id === data.id) {
              return data;
            } else {
              return p;
            }
          })
        );
      });
  };
  const handleChange = (e) => {
    setNewLike(newLike + 1);
    setFormData({ ...formData, newLike });
    patchGrat(formData);
  };
  //   const handleChange = (e) => {
  //     console.log(e.target);
  //   };
  return (
    <div>
      <Container className="py-2">
        <div className="card col">
          <div className="card-header">Grateful</div>
          <div className="card-body row align-items-center">
            <div className="col-sm-auto">
              <div className="card" style={{ width: "10rem" }}>
                <img
                  className="card-img-top"
                  src={image === "" ? profileImg : image}
                  alt="B.Lopez"
                />
                <div className="card-body">
                  <p
                    className="card-text"
                    onClick={handleChange}
                    value={newLike}
                    name="likes"
                  >
                    {newLike <= 0 ? (
                      <Heart color="red" size={20} />
                    ) : (
                      <HeartFill color="red" size={20} />
                    )}{" "}
                    {newLike}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <blockquote className="blockquote mb-0">
                <p>{comment}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">{name}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
