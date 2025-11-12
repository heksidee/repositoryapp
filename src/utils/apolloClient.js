import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://192.168.0.184:4000/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
