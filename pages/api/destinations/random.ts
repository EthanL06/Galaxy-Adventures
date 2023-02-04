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

  const { exclude } = req.query;

  if (typeof exclude !== "string") {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  // Get 3 random destinations and make sure they are not the same
  const randomDestinations = [];
  while (randomDestinations.length < 3) {
    const randomDestination =
      destinations[Math.floor(Math.random() * destinations.length)];
    if (
      !randomDestinations.includes(randomDestination) &&
      randomDestination.title.toLowerCase() !== exclude.toLowerCase()
    ) {
      randomDestinations.push(randomDestination);
    }
  }

  // Return the content of the data file in json format
  res.status(200).json(randomDestinations);
}
