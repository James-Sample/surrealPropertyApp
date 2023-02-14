import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("alert system", () => {
  xit("displays an error alert", () => {
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  xit("displays a success message", () => {
    const { getByText } = render(<Alert message="Success!" success />);
    expect(getByText(/Success/).textContent).toBe("Success!");
  });

  xit("doesnt render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });

  xit("diplays an error message if the message prop is Error", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  xit("diplays an error message if the message prop is success", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Success/).textContent).toBe("Success!");
  });
});
