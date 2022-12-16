import {
  gql,
  useSuspenseQuery_experimental as useSuspenseQuery,
} from "@apollo/client";

const QUERY = gql`
  query {
    getPokemon(pokemon: "dragonite") {
      sprite
      num
      species
      color
    }
  }
`;

export default async function ServerComponent() {
  const { data } = await useSuspenseQuery(QUERY);
  return (
    <div
      style={{
        width: "50px",
        height: "100px",
        textAlign: "center",
        backgroundColor: "rebeccapurple",
      }}
    >
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
