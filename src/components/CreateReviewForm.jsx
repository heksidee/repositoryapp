import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import ThemedText from "./ThemedText";

const initialValues = {
  ownerName: "",
  repoName: "",
  rating: "",
  review: "",
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
  ownerName: yup.string().required("Repository owner name is required"),
  repoName: yup.string().required("Repository name is required"),
  rating: yup.number().required("Rating is required").min(0).max(100),
});

const CreateReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <View style={styles.totalInput}>
        <TextInput
          placeholder="Repository owner name"
          value={formik.values.ownerName}
          onChangeText={formik.handleChange("ownerName")}
          onBlur={formik.handleBlur("ownerName")}
          style={[
            styles.input,
            formik.touched.ownerName &&
              formik.errors.ownerName &&
              styles.errorInput,
          ]}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <ThemedText color="errorText" style={styles.errorText}>
            {formik.errors.ownerName}
          </ThemedText>
        )}
      </View>
      <View style={styles.totalInput}>
        <TextInput
          placeholder="Repository name"
          value={formik.values.repoName}
          onChangeText={formik.handleChange("repoName")}
          onBlur={formik.handleBlur("repoName")}
          style={[
            styles.input,
            formik.touched.repoName &&
              formik.errors.repoName &&
              styles.errorInput,
          ]}
        />
        {formik.touched.repoName && formik.errors.repoName && (
          <ThemedText color="errorText" style={styles.errorText}>
            {formik.errors.repoName}
          </ThemedText>
        )}
      </View>
      <View style={styles.totalInput}>
        <TextInput
          placeholder="Rating between 0 and 100"
          value={formik.values.rating}
          onChangeText={formik.handleChange("rating")}
          onBlur={formik.handleBlur("rating")}
          style={[
            styles.input,
            formik.touched.rating && formik.errors.rating && styles.errorInput,
          ]}
        />
        {formik.touched.rating && formik.errors.rating && (
          <ThemedText color="errorText" style={styles.errorText}>
            {formik.errors.rating}
          </ThemedText>
        )}
      </View>
      <View style={styles.totalInput}>
        <TextInput
          placeholder="Review"
          value={formik.values.review}
          onChangeText={formik.handleChange("review")}
          onBlur={formik.handleBlur("review")}
          style={[styles.input, formik.touched.review]}
        />
      </View>
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <ThemedText fontWeight="bold" color="textButton">
          Create a review
        </ThemedText>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
