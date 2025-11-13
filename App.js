import "fast-text-encoding";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient();

console.log("Main component:", Main);
console.log("ApolloClient:", apolloClient);
console.log("NativeRouter:", NativeRouter);
const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
