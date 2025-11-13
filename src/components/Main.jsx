import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import theme from "../theme";

console.log("Routes:", Routes);
console.log("Route:", Route);
console.log("Navigate:", Navigate);
console.log("AppBar:", AppBar);

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default Main;
