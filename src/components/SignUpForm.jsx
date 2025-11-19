import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import ThemedText from "./ThemedText";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
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
  username: yup.string().required("Username is required").min(5).max(30),
  password: yup.string().required("Password is required").min(5).max(50),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <View style={styles.totalInput}>
        <TextInput
          placeholder="Username"
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
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          secureTextEntry={true}
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
      <View style={styles.totalInput}>
        <TextInput
          placeholder="Password confirmation"
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange("confirmPassword")}
          onBlur={formik.handleBlur("confirmPassword")}
          secureTextEntry={true}
          style={[
            styles.input,
            formik.touched.confirmPassword &&
              formik.errors.confirmPassword &&
              styles.errorInput,
          ]}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <ThemedText color="errorText" style={styles.errorText}>
            {formik.errors.confirmPassword}
          </ThemedText>
        )}
      </View>
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <ThemedText fontWeight="bold" color="textButton">
          Sign up
        </ThemedText>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
