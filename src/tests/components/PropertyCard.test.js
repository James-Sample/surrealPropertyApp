import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("property card", () => {
  const validProps = {
    title: "2 bed",
    type: "Flat",
    bathrooms: 2,
    bedrooms: 3,
    price: 10000,
    city: "Manchester",
    email: "surreal@estate.com",
  };
  it("renders a property card", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct value for props", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(getByText("2 bed")).toHaveClass("property-title");
    expect(getByText("Flat")).toHaveClass("property-type");
    expect(getByText("2")).toHaveClass("property-bathrooms");
    expect(getByText("3")).toHaveClass("property-bedrooms");
    expect(getByText("10000")).toHaveClass("property-price");
    expect(getByText("Manchester")).toHaveClass("property-city");
    // expect(getByText("surreal@estate.com")).toHaveClass("property-email");
  });
});
