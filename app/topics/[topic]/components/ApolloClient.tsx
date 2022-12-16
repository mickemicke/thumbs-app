"use client";

import { ReactNode } from "react";
import memoryCache from "../../../cache";

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  SuspenseCache,
} from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://graphqlpokemon.favware.tech/v7",
    // fetch,
  }),
  cache: memoryCache,
});

const sCache = new SuspenseCache();

export default function MyApolloClient(props: { children: ReactNode }) {
  return (
    <ApolloProvider client={client} suspenseCache={sCache}>
      {props.children}
    </ApolloProvider>
  );
}
