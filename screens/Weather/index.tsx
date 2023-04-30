import { useCallback, useRef } from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cityCoordinates, { City } from "@assets/cityCoordinates";
import CityWeather from "@components/CityWeather";
import colors from "@theme/colors";

const ITEM_WIDTH = Dimensions.get("window").width;

const Weather = () => {
  const flatListRef = useRef<FlatList>(null);

  const keyExtractor = useCallback((item: City) => item.name, []);
  const renderItem = useCallback(
    ({ item }: { item: City }) => <CityWeather city={item} />,
    []
  );
  const getItemLayout = useCallback(
    (_: City[] | null | undefined, index: number) => ({
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * index,
      index,
    }),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={cityCoordinates}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={1}
        initialNumToRender={1}
        windowSize={3}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        horizontal
        pagingEnabled
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Weather;
