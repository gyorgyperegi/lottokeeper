import userEvent from "@testing-library/user-event";
import {act, render, screen, waitFor} from "@testing-library/react";
import PickAccount from "./PickAccount";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => (jest.fn())
}));

describe("PickAccount", () => {
  const setName = jest.fn();
  beforeEach(() => {
    render(
      <PickAccount setName={setName}/>
    );
  });

  it("should render LoginPage element by default", async () => {
    expect(screen.getByText("Pick a user type")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Player")).toBeInTheDocument();
  });

  it("should load username page", async () => {
    userEvent.click(screen.getByText("Player"));
    expect(screen.getByText("Pick username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Please enter your name")).toBeInTheDocument();
  });

  it("should cancel username page", async () => {
    userEvent.click(screen.getByText("Player"));

    userEvent.click(screen.getByRole("button",{name: "Back"}));
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });

  it("should Register username", async () => {
    userEvent.click(screen.getByText("Player"));

    userEvent.type(screen.getByPlaceholderText("Please enter your name"), "George");

    act(() => {
      userEvent.click(screen.getByText("Register"));
    });

    expect(setName).toHaveBeenCalled();
  });
});
