import { NextApiRequest, NextApiResponse } from "next";

export const runtime = 'edge';

const API_URL = "https://skirmantesolutionfocus.substack.com/api/v1/archive";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const response = await fetch(`${API_URL}?limit=5&sort=new`);
    if (!response.ok) throw new Error("Failed to fetch substack articles");
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
      res.status(500).json({ ok: false, error: "Failed to fetch substack articles" });
  }
}
