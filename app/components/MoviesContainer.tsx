import { toErrorWithMessage } from "../../helpers/toErrorWithMessage";
import MoviesPresentation, { Movie } from "./MoviesPresentation";

const getData = async (): Promise<Movie[]> => {
  const api = "http://localhost:3000/api/movies";
  try {
    const res = await fetch(`${api}`, {
      headers: { contentType: "application/json" },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    throw toErrorWithMessage(error);
  }
};

export default async function MoviesContainer() {
  const data = await getData();
  if (data) {
    return <MoviesPresentation movies={data} />;
  }
}
