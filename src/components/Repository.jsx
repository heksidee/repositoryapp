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
  const { data, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id, first: 3 },
    fetchPolicy: "cache-and-network",
  });

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

  const handleFetchMore = () => {
    if (!repo.reviews.pageInfo.hasNextPage) return;
    fetchMore({
      variables: {
        after: repo.reviews.pageInfo.endCursor,
        first: 3,
        repositoryId: id,
      },
    });
  };

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
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.2}
    />
  );
};
export default Repository;
