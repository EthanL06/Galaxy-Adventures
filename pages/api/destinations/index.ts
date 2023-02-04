import type { NextApiRequest, NextApiResponse } from "next";
import { Destination } from "@/types/destination";

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
    jsonDirectory + "/destinations.json",
    "utf8"
  );

  // Parse the json data file
  const destinations: Destination[] = JSON.parse(fileContents);
  const { destination } = req.query;

  if (destination) {
    if (typeof destination !== "string") {
      res.status(400).json({ message: "Bad request" });
      return;
    }

    const filtered = destinations.filter(
      (item) => item.title.toLowerCase() === destination.toLowerCase()
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
  res.status(200).json(destinations);
}
