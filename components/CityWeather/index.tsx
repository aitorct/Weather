import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { City } from "@assets/cityCoordinates";
import Chart from "@components/Chart";
import StyledText from "@components/StyledText";
import { getTemperatureForCoordinates } from "@libs/api";
import { i18n } from "@libs/locales";
import { useQuery } from "@tanstack/react-query";
import colors from "@theme/colors";
import sizes from "@theme/sizes";

type Props = {
  city: City;
};

const CityWeather = ({ city: { name, coordinates } }: Props) => {
  const { isLoading, error, data } = useQuery(["weather", name], () =>
    getTemperatureForCoordinates(coordinates)
  );

  if (isLoading || error) return null;

  const {
    hourly_units: { temperature_2m: temperatureUnit },
    hourly: { time, temperature_2m: temperature },
  } = data;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <StyledText style="header">{name}</StyledText>
        <View style={styles.cardContent}>
          <View style={styles.card}>
            <View style={styles.textWrapper}>
              <StyledText style="title">
                {i18n.t("cityWeather.temperature")}
              </StyledText>
              <StyledText style="subtitle">
                {i18n.t("cityWeather.hourly")}
              </StyledText>
            </View>
            <Chart labels={time} data={temperature} unit={temperatureUnit} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  wrapper: {
    flex: 1,
    padding: sizes.s24,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: sizes.borderRadius,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardContent: {
    paddingVertical: sizes.s24,
  },
  textWrapper: {
    paddingHorizontal: sizes.s16,
    paddingTop: sizes.s8,
    paddingBottom: sizes.s16,
  },
});

export default React.memo(CityWeather);
