import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

describe("it renders the app", () => {
  xit("renders the app", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  xit("renders the Title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Surreal Estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
