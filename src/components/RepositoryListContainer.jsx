import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryListHeader from "./RepositoryListHeader";
import RepositoryItem from "./RepositoryItem";

export class RepositoryListContainer extends React.Component {
  styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  ItemSeparator = () => <View style={this.styles.separator} />;

  renderHeader = () => {
    return <RepositoryListHeader {...this.props} />;
  };

  render() {
    return (
      <FlatList
        data={this.props.repositories}
        ItemSeparatorComponent={this.ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default RepositoryListContainer;
