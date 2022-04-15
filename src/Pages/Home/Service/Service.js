import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();
  const navigateServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img className="w-100" src={img} alt="" />
      <h1>name: {name}</h1>
      <p>price: {price}</p>
      <p>{description}</p>
      <button
        onClick={() => navigateServiceDetails(id)}
        className="btn btn-primary border-0"
      >
        book:{name}
      </button>
    </div>
  );
};

export default Service;
