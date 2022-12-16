import { InMemoryCache } from "@apollo/client";

export const memoryCache = new InMemoryCache({
  typePolicies: {
    Pokemon: {
      keyFields: ["num"],
      fields: {
        isLocal: {
          read() {
            return false;
          },
        },
      },
    },
  },
});

export default memoryCache;
