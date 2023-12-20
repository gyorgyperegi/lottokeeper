import {render, screen} from "@testing-library/react";
import Navbar from "./Brand";

describe("Navbar", () => {
  beforeEach(() => {
  });

  it.each([
    ["Play"],
    ["Tickets"],
    ["Menu1"],
    ["Menu2"],
    ["Profile"]
  ])(
    'should render % menu item in navbar',
    (label) => {
      render(
        <Navbar/>
      );

      expect(screen.getByTestId(label)).toBeInTheDocument();
    }
  );
});
