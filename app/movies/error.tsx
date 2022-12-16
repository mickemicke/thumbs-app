"use client";

import { notFound } from "next/navigation";

interface ErrorProps {
  error: {
    message: string;
    reset: () => void;
  };
}

export default function Error(props: ErrorProps) {
  console.log(props);
  notFound();
  return (
    <>
      Error....<pre>{props.error.message}</pre>
    </>
  );
}
