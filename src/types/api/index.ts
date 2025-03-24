export type Album = {
  id: number;
  name: string;
  albumCount: number;
  portrait: string;
};

export type PaginationDetails = {
  current_page: number;
  total_pages: number;
  per_page: number;
  total_items: number;
};

export type ArtistsResponse = {
  data?: Album[];
  pagination?: PaginationDetails;
  message?: string;
};
