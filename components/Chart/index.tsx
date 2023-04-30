import { useCallback } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { hexToRGBA } from "@libs/utils";
import colors from "@theme/colors";
import sizes from "@theme/sizes";

type Props = {
  labels: string[];
  data: number[];
  unit: string;
};

const PARENT_PADDING = sizes.s24 * 2;
const CHART_SIZE = {
  width: Dimensions.get("window").width - PARENT_PADDING,
  height: 400,
};
const MAX_Y = 25;

const Chart = ({ labels, data, unit }: Props) => {
  // Avoid an overcrowded X axis
  const formatXLabel = useCallback((label: string): string => {
    const hour = new Date(label).getHours();
    return hour % 4 ? "" : hour.toString();
  }, []);

  return (
    <LineChart
      data={{
        labels,
        datasets: [
          {
            data,
          },
        ],
      }}
      {...CHART_SIZE}
      yLabelsOffset={sizes.yLabelOffset}
      yAxisSuffix={unit}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        decimalPlaces: 0,
        color: (opacity = 255) => hexToRGBA(colors.chart, opacity), // `color` only takes RGBA colors
        labelColor: () => colors.chartLabel,
      }}
      bezier
      fromZero
      fromNumber={MAX_Y}
      style={styles.container}
      formatXLabel={formatXLabel}
      withDots={false}
      withVerticalLines={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: -sizes.s36, // HOTFIX: The chart library does not properly calculate the height of the chart's container
  },
});

export default Chart;
