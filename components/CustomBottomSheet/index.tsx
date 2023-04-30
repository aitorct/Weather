import { RefObject, useCallback, useMemo } from "react";
import React from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import BottomSheetButton from "./components/BottomSheetButton";

type Data = { name: string };
type Props<T> = {
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  onItemPress: (index: number) => void;
};

const CustomBottomSheet = <T extends Data>(
  { data, keyExtractor, onItemPress }: Props<T>,
  ref: React.ForwardedRef<BottomSheet>
): JSX.Element => {
  const snapPoints = useMemo(() => ["50%"], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const renderItem = useCallback(
    ({ item, index }: { item: T; index: number }) => (
      <BottomSheetButton onPress={() => onItemPress(index)} label={item.name} />
    ),
    [onItemPress]
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enablePanDownToClose
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </BottomSheet>
  );
};

export default React.forwardRef(CustomBottomSheet) as <T extends Data>(
  props: Props<T> & { ref?: RefObject<BottomSheetMethods> }
) => JSX.Element;
