import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import StatConverter from "./StatConverter";
import ThemedText from "./ThemedText";
import { useNavigate } from "react-router-native";

const RepositoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <View testID="repositoryItem" style={styles.container}>
        <View style={styles.topSection}>
          <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
          <View style={styles.info}>
            <ThemedText fontWeight="bold">{item.fullName}</ThemedText>
            <ThemedText>{item.description}</ThemedText>
            <ThemedText color="textButton" style={styles.language}>
              {item.language}
            </ThemedText>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <StatConverter count={item.stargazersCount} />
            <ThemedText>Stars</ThemedText>
          </View>
          <View style={styles.statItem}>
            <StatConverter count={item.forksCount} />
            <ThemedText>Forks</ThemedText>
          </View>
          <View style={styles.statItem}>
            <StatConverter count={item.reviewCount} />
            <ThemedText>Reviews</ThemedText>
          </View>
          <View style={styles.statItem}>
            <StatConverter count={item.ratingAverage} />
            <ThemedText>Rating</ThemedText>
          </View>
        </View>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Open in GitHub</ThemedText>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 5,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: "#0366d6",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  statItem: {
    alignItems: "center",
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
});

export default RepositoryItem;
