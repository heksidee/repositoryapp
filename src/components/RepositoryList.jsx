import { useState } from "react";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import ThemedText from "./ThemedText";

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);
  const [orderOption, setOrderOption] = useState("latest");
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");

  const { repositories, error } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchKeyword,
  });

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
