// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from ".";

type Movies = {
  title: string;
  _id: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies | undefined>
) {
  const item = data.find((d) => d._id === req.query.movieId);

  res.status(200).json(item);
}
