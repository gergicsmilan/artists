import { ArtistsResponse } from "./types/api";

export const data: ArtistsResponse = {
  data: [
    { id: 2, albumCount: 3, name: "asd", portrait: "some url" },
    { id: 22, albumCount: 3, name: "asd4", portrait: "some url" },
    { id: 23, albumCount: 3, name: "asd4", portrait: "some url" },
    { id: 24, albumCount: 3, name: "asd2", portrait: "some url" },
    { id: 25, albumCount: 3, name: "asd1", portrait: "some url" },
  ],
  pagination: {
    current_page: 1,
    per_page: 50,
    total_items: 5,
    total_pages: 1,
  },
};
