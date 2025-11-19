import { Searchbar } from "react-native-paper";
import { FlatList, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";

const RepositoryListContainer = ({
  repositories,
  orderBy,
  setOrderBy,
  orderDirection,
  setOrderDirection,
  orderOption,
  setOrderOption,
  searchKeyword,
  setSearchKeyword,
}) => {
  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    searchInput: {
      backgroundColor: "white",
      margin: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  const Header = () => (
    <View>
      <Searchbar
        placeholder="Search repositories"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        style={styles.searchInput}
      />
      <Picker
        selectedValue={orderOption}
        onValueChange={(value) => {
          setOrderOption(value);
          if (value === "latest") {
            setOrderBy("CREATED_AT");
            setOrderDirection("DESC");
          } else if (value === "highest") {
            setOrderBy("RATING_AVERAGE");
            setOrderDirection("DESC");
          } else if (value === "lowest") {
            setOrderBy("RATING_AVERAGE");
            setOrderDirection("ASC");
          }
        }}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={Header}
    />
  );
};

export default RepositoryListContainer;
