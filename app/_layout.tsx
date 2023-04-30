import React from "react";
import queryClient from "@libs/queryClient";
import storagePersister from "@libs/storagePersister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: storagePersister }}
    >
      <Slot />
    </PersistQueryClientProvider>
  );
};

export default RootLayout;
