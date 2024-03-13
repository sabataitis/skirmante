const API_URL = "https://skirmantesolutionfocus.substack.com/api/v1/archive";

export async function fetchLatestSubstackPosts() {
  try {
    const res = await fetch(`${API_URL}?limit=5&sort=new`);
    if (!res.ok) throw new Error("Failed to fetch data");

    return await res.json();
  } catch (e) {
    return null;
  }
}
