import React from "react";
import { render } from "@testing-library/react";
import Properties from "../../components/Properties";

describe("rendering multiple property cards", () => {
  const validProps = [
    {
      title: "2 bed",
      type: "Flat",
      bathrooms: 2,
      bedrooms: 2,
      price: 10000,
      city: "Manchester",
      email: "surreal@estate.com",
    },
    {
      title: "3 bed",
      type: "House",
      bathrooms: 2,
      bedrooms: 3,
      price: 20000,
      city: "Leeds",
      email: "real@estate.com",
    },
  ];
  it("renders the cards", () => {
    const { asFragment } = render(<Properties properties={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  //   it("renders the correct number of cards", () => {
  //     const { asFragment } = render(<Properties properties={validProps} />);
  //     expect()
  //   })
});
