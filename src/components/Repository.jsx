import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import ThemedText from "./ThemedText";

const Repository = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <ThemedText>Loading...</ThemedText>;
  if (error)
    return <ThemedText color="errorText">Error: {error.message}</ThemedText>;

  const repo = data?.repository;
  if (!repo)
    return (
      <View>
        <ThemedText>Repository not found</ThemedText>
      </View>
    );

  const reviews = repo.reviews.edges.map((edge) => edge.node);

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={
        <>
          <RepositoryItem item={repo} showGitHubButton />
          <ItemSeparator />
        </>
      }
    />
  );
};
export default Repository;
