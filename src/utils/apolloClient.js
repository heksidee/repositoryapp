import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";
import Constants from "expo-constants";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: Constants.expoConfig.extra.apolloUri,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
