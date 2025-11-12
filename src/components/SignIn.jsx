import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import ThemedText from "./ThemedText";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 2,
    borderColor: "#e1e4e8",
    padding: 12,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#0366d6",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    marginBottom: 10,
  },
  errorInput: {
    borderColor: "#d73a4a",
  },
  totalInput: {
    marginBottom: 10,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <View style={styles.totalInput}>
        <TextInput
          placeholder="Enter username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={[
            styles.input,
            formik.touched.username &&
              formik.errors.username &&
              styles.errorInput,
          ]}
        />
        {formik.touched.username && formik.errors.username && (
          <ThemedText color="errorText" style={styles.errorText}>
            {formik.errors.username}
          </ThemedText>
        )}
      </View>
      <View style={styles.totalInput}>
        <TextInput
          secureTextEntry
          placeholder="Enter password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          style={[
            styles.input,
            formik.touched.password &&
              formik.errors.password &&
              styles.errorInput,
          ]}
        />
        {formik.touched.password && formik.errors.password && (
          <ThemedText color="errorText" style={styles.errorText}>
            {formik.errors.password}
          </ThemedText>
        )}
      </View>
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <ThemedText fontWeight="bold" color="textButton">
          Sign in
        </ThemedText>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const handleSignIn = (values) => {
    console.log(values);
  };
  return <SignInForm onSubmit={handleSignIn} />;
};

export default SignIn;
