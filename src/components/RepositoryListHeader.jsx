import { Searchbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "white",
    margin: 10,
  },
});

const RepositoryListHeader = ({
  setOrderBy,
  setOrderDirection,
  orderOption,
  setOrderOption,
  searchKeyword,
  setSearchKeyword,
}) => (
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

export default RepositoryListHeader;
