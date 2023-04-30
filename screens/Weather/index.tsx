import { useCallback, useRef } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cityCoordinates, { City } from "@assets/cityCoordinates";
import Button from "@components/Button";
import CityWeather from "@components/CityWeather";
import { i18n } from "@libs/locales";
import colors from "@theme/colors";
import sizes from "@theme/sizes";

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

  const seeMoreCities = useCallback(() => {}, []);

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
      <View style={styles.buttonWrapper}>
        <Button label={i18n.t("weather.jumpToCity")} onPress={seeMoreCities} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  buttonWrapper: {
    padding: sizes.s16,
    paddingVertical: sizes.s24,
  },
});

export default Weather;
