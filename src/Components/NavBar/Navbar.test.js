import {render, screen} from "@testing-library/react";
import Navbar from "./Navbar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => (jest.fn())
}));

describe("Navbar", () => {
  beforeEach(() => {
  });

  it.each([
    ["Admins Room"],
    ["Tickets"],
    ["User guide"],
    ["Profile"]
  ])(
    'should render % menu item in navbar',
    (label) => {
      render(
        <Navbar role={"admin"}/>
      );
      expect(screen.getByTestId(label)).toBeInTheDocument();
    }
  );
});
