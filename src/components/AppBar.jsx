import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import ThemedText from "./ThemedText";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: "#24292e",
    flexDirection: "row",
  },
  appBarText: {
    marginRight: 10,
  },
  scrollView: {
    flexDirection: "row",
  },
});

const AppBar = () => {
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
      </ScrollView>
    </View>
  );
};

export default AppBar;
