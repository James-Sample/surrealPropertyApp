import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className="properties-page">
      <h2>Properties page</h2>
      <PropertyCard
        title="2 bed"
        city="manchester"
        type="flat"
        bedrooms="2"
        bathrooms="1"
        price="10000"
        email="surreal@estate.com"
      />
    </div>
  );
};

export default Properties;
