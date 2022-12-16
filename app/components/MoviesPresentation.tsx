"use client";
import { ListItem } from "@mui/material";
import Link from "next/link";

export type Movie = {
  title: string;
  _id: string;
  ratings?: number;
  comments?: string[];
};

const MovieItem = ({ _id, title }: Movie) => {
  return (
    <Link href={`movies/${_id}`}>
      <ListItem>{title}</ListItem>
    </Link>
  );
};

export default function MoviesPresentation(props: { movies: Movie[] }) {
  return (
    <>
      {props.movies.map((movie) => (
        <MovieItem key={movie._id} {...movie} />
      ))}
    </>
  );
}
