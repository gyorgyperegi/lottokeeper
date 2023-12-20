import {
  renderWithProviders, renderWithProvidersNoHistory
} from "../../Utils/testUtils";
import userEvent from "@testing-library/user-event";
import {render, screen} from "@testing-library/react";
import {Button} from "./Button";

describe("Button", () => {
  beforeEach(() => {
  });

  it("should render Button element by default", async () => {
    render(
      <Button
        width={"150px"}
        height={"50px"}
        color={"white"}
        background={"white"}
        text={"Back"}
        clickHandler={jest.fn()}
      />
    );

    expect(screen.getByRole("button",{name:"Back"})).toBeInTheDocument();
    expect(screen.getByRole("button",{name:"Back"})).toHaveStyle(`width: 150px`);
    expect(screen.getByRole("button",{name:"Back"})).toHaveStyle(`min-height: 50px`);
    expect(screen.getByRole("button",{name:"Back"})).toHaveStyle(`color: white`);
    expect(screen.getByRole("button",{name:"Back"})).toHaveStyle(`background: white`);
  });

  it("should call Button handler on click", async () => {
    const mockOnClickHandler = jest.fn();
    render(
      <Button
        width={"150px"}
        height={"50px"}
        color={"white"}
        background={"white"}
        text={"Back"}
        clickHandler={mockOnClickHandler}
      />
    );

    userEvent.click(screen.getByRole("button",{name:"Back"}));
    expect(mockOnClickHandler).toHaveBeenCalled();
  });
});
