import MoviesContainer from "../components/MoviesContainer";

export default async function Home() {
  /* @ts-expect-error Server Component */
  return <MoviesContainer />;
}
