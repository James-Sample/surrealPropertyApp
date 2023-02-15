import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState([]);

  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing/")
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({
          message: "Unable to retrieve properties",
          isSuccess: false,
        });
      });
  }, []);

  return (
    <div className="properties-page">
      <h2>Properties page</h2>
      <div className="property-cards">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => (
          <div className="properties">
            <PropertyCard key={property._id} {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

Properties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      bathrooms: PropTypes.string,
      bedrooms: PropTypes.string,
      price: PropTypes.string,
      city: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
};
export default Properties;
