import SignInForm from "./SignInForm";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const handleSignIn = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data?.authenticate?.accessToken) {
        navigate("/");
      }
    } catch (e) {
      console.error("Login failed", e);
    }
  };
  return <SignInForm onSubmit={handleSignIn} />;
};

export default SignIn;
