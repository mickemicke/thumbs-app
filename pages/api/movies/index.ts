// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Movies = {
  title: string;
  _id: string;
};

export const data = [
  {
    title: "Die hard",
    _id: "1",
  },
  {
    title: "Indepedence Day",
    _id: "2",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies[]>
) {
  res.status(200).json(data);
}
