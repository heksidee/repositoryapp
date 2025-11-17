import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import ThemedText from "./ThemedText";

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) return <ThemedText>Loading...</ThemedText>;
  if (error)
    return <ThemedText color="errorText">Error: {error.message}</ThemedText>;

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
