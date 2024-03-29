# Weather

This app has been built with:

- TypeScript
- React Native (Expo)

## Installation and setup

Clone the project locally and install the project dependencies from the root folder.

```sh
yarn
```

Run the app! 🎉

```sh
yarn run ios
yarn run android
```

## Tests

This project features E2E, unit, and snapshot tests.

### E2E

You'll first need to install [Maestro](https://www.mobile.dev/). After that, run the following command.

```sh
yarn test:e2e
```

You can find a recorded demo in the `/tests/e2e` folder.

### Snapshot and unit tests

Run the snapshot and unit tests using `jest`.

```sh
yarn test
```

## Used libraries

- [`expo-router`](https://github.com/expo/router) for managing navigation
- [`react-native-chart-kit`](https://github.com/indiespirit/react-native-chart-kit) to render awesome charts
- [`@tanstack/react-query`](https://github.com/TanStack/query) for data fetching and caching
- [`@react-native-async-storage/async-storage`](https://github.com/react-native-async-storage/async-storage) to store the cache for offline usage

## Next steps

- Improve test coverage
- Add a loading state in the Weather screen (something like a chart skeleton could work well)
- Handle API errors
- Adapt chart size depending on screen size
- Move the chart library to one based on [`react-native-skia`](https://github.com/Shopify/react-native-skia) instead of [`react-native-svg`](https://github.com/software-mansion/react-native-svg) for improved performance
- Move from React Native's `FlatList` to Shopify's [`FlashList`](https://github.com/Shopify/flash-list) for improved performance (requires EAS/Development Client)
- Move from [`@react-native-async-storage`](https://github.com/react-native-async-storage/async-storage) to [`react-native-mmkv`](https://github.com/mrousavy/react-native-mmkv) for faster cache reads and writes (requires EAS/Development Client)

## Screenshots

<img src="https://user-images.githubusercontent.com/6463569/235362270-0fccd84d-f48f-4858-8e5c-af255529243e.png" width="500" />

## Demo

https://user-images.githubusercontent.com/6463569/235363660-6f319ba8-5e62-4cfa-811a-595b15894fa3.mp4
