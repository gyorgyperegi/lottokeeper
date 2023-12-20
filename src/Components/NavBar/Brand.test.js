import {render, screen} from "@testing-library/react";
import Brand from "./Brand";

describe("Brand", () => {
  beforeEach(() => {
  });

  it("should render Brand element by default", async () => {
    render(
      <Brand/>
    );

    expect(screen.getByText("Lottokeeper")).toBeInTheDocument();
  });
});
