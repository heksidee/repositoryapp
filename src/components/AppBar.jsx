import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import ThemedText from "./ThemedText";
import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import useSignOut from "../hooks/useSignOut";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    paddingBottom: 25,
    paddingTop: 80,
    backgroundColor: "#24292e",
    flexDirection: "row",
  },
  appBarText: {
    marginRight: 20,
  },
  scrollView: {
    flexDirection: "row",
  },
  userView: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const user = data?.me;
  const signOut = useSignOut();
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to="/">
          <ThemedText
            fontWeight="bold"
            fontSize="subheading"
            color="textButton"
            style={styles.appBarText}
          >
            Repositories
          </ThemedText>
        </Link>
        {user ? (
          <View style={styles.userView}>
            <Pressable>
              <Link to="/create">
                <ThemedText
                  fontWeight="bold"
                  fontSize="subheading"
                  color="textButton"
                  style={styles.appBarText}
                >
                  Create a review
                </ThemedText>
              </Link>
            </Pressable>
            <Pressable>
              <Link to="/myreviews">
                <ThemedText
                  fontWeight="bold"
                  fontSize="subheading"
                  color="textButton"
                  style={styles.appBarText}
                >
                  My reviews
                </ThemedText>
              </Link>
            </Pressable>
            <Pressable onPress={signOut}>
              <ThemedText
                fontWeight="bold"
                fontSize="subheading"
                color="textButton"
                style={styles.appBarText}
              >
                Sign out
              </ThemedText>
            </Pressable>
          </View>
        ) : (
          <View style={styles.userView}>
            <Link to="/signin">
              <ThemedText
                fontWeight="bold"
                fontSize="subheading"
                color="textButton"
                style={styles.appBarText}
              >
                Sign In
              </ThemedText>
            </Link>
            <Link to="/signup">
              <ThemedText
                fontWeight="bold"
                fontSize="subheading"
                color="textButton"
                style={styles.appBarText}
              >
                Sign up
              </ThemedText>
            </Link>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
