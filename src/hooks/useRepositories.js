import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const repositories = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  return { repositories, loading, error, refetch };
};
export default useRepositories;
