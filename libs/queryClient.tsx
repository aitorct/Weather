import { QueryClient } from "@tanstack/react-query";

export default new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 hour
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});
