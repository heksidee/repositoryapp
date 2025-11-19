import { useState } from "react";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import ThemedText from "./ThemedText";

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [orderOption, setOrderOption] = useState("latest");
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");

  const { repositories, loading, error } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
  });

  if (loading) return <ThemedText>Loading...</ThemedText>;
  if (error)
    return <ThemedText color="errorText">Error: {error.message}</ThemedText>;

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
      orderOption={orderOption}
      setOrderOption={setOrderOption}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;
