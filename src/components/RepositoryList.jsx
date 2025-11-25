import { useState } from "react";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);
  const [orderOption, setOrderOption] = useState("latest");
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");

  const { repositories, fetchMore } = useRepositories({
    first: 8,
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchKeyword,
  });

  const onEndReach = () => {
    if (repositories?.pageInfo?.hasNextPage) {
      fetchMore();
      console.log("fetching more...");
    } else {
      console.log("No more pages");
    }
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
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
