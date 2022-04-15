import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>this is service pages:{serviceId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">proceed checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
