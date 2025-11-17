import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react-native";
import SignInForm from "../components/SignInForm";

describe("SignInForm", () => {
  it("calls function provided by onSubmit prop after pressin the submit button", async () => {
    const onSubmit = jest.fn();
    render(<SignInForm onSubmit={onSubmit} />);

    fireEvent.changeText(screen.getByPlaceholderText("Enter username"), "albo");
    fireEvent.changeText(
      screen.getByPlaceholderText("Enter password"),
      "secret"
    );
    fireEvent.press(screen.getByText("Sign in"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: "albo",
      password: "secret",
    });
  });
});
