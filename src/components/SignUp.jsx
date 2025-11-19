import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client/react";
import SignUpForm from "./SignUpForm";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "../hooks/useSignIn";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const handleSignUp = async (values) => {
    const { username, password } = values;
    try {
      await createUser({
        variables: {
          user: { username, password },
        },
      });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.error("Sign up failed", e);
    }
  };

  return <SignUpForm onSubmit={handleSignUp} />;
};
export default SignUp;
