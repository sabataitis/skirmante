import { NextResponse } from "next/server";

export const runtime = 'edge';

const API_URL = "https://skirmantesolutionfocus.substack.com/api/v1/archive";

export default async function handler() {
  try {
    const response = await fetch(`${API_URL}?limit=5&sort=new`);
    if (!response.ok) throw new Error("Failed to fetch substack articles");

    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
      return NextResponse.json({ ok: false, error: "Failed to fetch substack articles"});
  }
}
