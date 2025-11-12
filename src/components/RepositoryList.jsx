import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
//import useRepositories from "../hooks/useRepositories";
import ThemedText from "./ThemedText";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES);

  if (loading) return <ThemedText>Loading...</ThemedText>;
  if (error)
    return <ThemedText color="errorText">Error: {error.message}</ThemedText>;

  const repositories = data.repositories.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
