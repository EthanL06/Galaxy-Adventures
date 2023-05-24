import type { NextApiRequest, NextApiResponse } from "next";
import { Review } from "@/types/review";

import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/reviews.json",
    "utf8"
  );

  // Parse the json data file
  const reviews: Review[] = JSON.parse(fileContents);
  const { destination } = req.query;

  if (destination) {
    if (typeof destination !== "string") {
      res.status(400).json({ message: "Bad request" });
      return;
    }

    const filtered = reviews.filter(
      (item) => item.destination.toLowerCase() === destination.toLowerCase()
    );

    if (filtered.length > 0) {
      res.status(200).json(filtered[0]);
      return;
    } else {
      res.status(404).json({ message: "Destination not found" });
      return;
    }
  }

  //Return the content of the data file in json format
  res.status(200).json(reviews);
}
