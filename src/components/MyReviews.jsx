import { useQuery, useMutation } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import { DELETE_REVIEW } from "../graphql/mutations";
import ThemedText from "./ThemedText";
import { View, StyleSheet, Pressable, ScrollView, Alert } from "react-native";
import { useNavigate } from "react-router-native";

const MyReviews = () => {
  const { data, error, loading, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
  });
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    onCompleted: () => {
      console.log("Review deleted");
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting review:", error);
    },
  });

  const confirmDelete = (reviewId) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () =>
            deleteReview({
              variables: { deleteReviewId: reviewId },
              update: () => {},
            }),
        },
      ]
    );
  };
  const navigate = useNavigate();

  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }
  if (error) {
    return <ThemedText color="errorText">Error: {error.message}</ThemedText>;
  }

  const reviews = data?.me?.reviews?.edges ?? [];
  if (reviews.length === 0) {
    return (
      <View style={styles.noAddedCenterded}>
        <ThemedText style={styles.noAddedText} fontWeight="bold">
          No added reviews
        </ThemedText>
      </View>
    );
  }

  return (
    <ScrollView>
      {reviews.map(({ node }) => (
        <View key={node.id} style={styles.container}>
          <View style={styles.topSection}>
            <View style={styles.ratingCircle}>
              <ThemedText style={styles.rating} fontWeight="bold">
                {node.rating}
              </ThemedText>
            </View>
            <View style={styles.info}>
              <ThemedText fontWeight="bold">
                {node.repository.fullName}
              </ThemedText>
              <ThemedText style={styles.date}>
                {new Date(node.createdAt).toLocaleDateString()}
              </ThemedText>
              <ThemedText>{node.text}</ThemedText>
            </View>
          </View>
          <View style={styles.buttons}>
            <Pressable
              style={styles.button}
              onPress={() => navigate(`/repository/${node.repository.id}`)}
            >
              <ThemedText style={styles.buttonText}>View repository</ThemedText>
            </Pressable>
            <Pressable
              style={styles.buttonDel}
              onPress={() => confirmDelete(node.id)}
            >
              <ThemedText style={styles.buttonText}>Delete review</ThemedText>
            </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
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
  noAddedCenterded: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noAddedText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#0366d6",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonDel: {
    backgroundColor: "#d73a4a",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    flex: 1,
    marginLeft: 5,
  },
});
export default MyReviews;
