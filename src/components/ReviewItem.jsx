import ThemedText from "./ThemedText";
import { View, StyleSheet } from "react-native";

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.ratingCircle}>
          <ThemedText style={styles.rating} fontWeight="bold">
            {review.rating}
          </ThemedText>
        </View>
        <View style={styles.info}>
          <ThemedText fontWeight="bold">{review.user.username}</ThemedText>
          <ThemedText style={styles.date}>
            {new Date(review.createdAt).toLocaleDateString()}
          </ThemedText>
          <ThemedText>{review.text}</ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  info: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  ratingCircle: {
    borderWidth: 2,
    borderColor: "#0366d6",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  rating: {
    color: "#0366d6",
  },
  date: {
    marginBottom: 5,
  },
});
export default ReviewItem;
