import { BookData } from "@/type";
import { error } from "console";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `http://localhost:12345/book`;

  if (q) {
    url += `/search?q=${q}`;
  }
  console.log("url", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch {
    console.error(error);
    return [];
  }
}
