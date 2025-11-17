import React from "react";
import { View } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import ThemedText from "./ThemedText";

const Repository = ({ repositories }) => {
  const { id } = useParams();
  const repo = repositories.find((r) => r.id === id);
  if (!repo)
    return (
      <View>
        <ThemedText>Repository not found</ThemedText>
      </View>
    );

  return <RepositoryItem item={repo} />;
};
export default Repository;
