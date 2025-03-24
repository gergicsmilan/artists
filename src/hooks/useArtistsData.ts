import { useCallback, useEffect, useState } from "react";
import { Album, ArtistsResponse, PaginationDetails } from "../types/api";

type Props = {
  getURLSearchParamsString: () => string;
};

const useArtistsData = ({ getURLSearchParamsString }: Props) => {
  const [data, setData] = useState<ArtistsResponse>({
    data: [] as Album[],
    pagination: {} as PaginationDetails,
  });
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const getArtists = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);

      const queryParamsString = getURLSearchParamsString();
      const responseJSON = await fetch(
        `${import.meta.env.VITE_API_URL}/artists?${queryParamsString}`
      );
      const response = await responseJSON.json();

      if (response.data && response.pagination) setData(response);
      if (response.message) setError(response.message);

      setLoading(false);
    } catch (error) {
      setError("Uuuups something went wrong!");
      setLoading(false);
      console.log("Log errror:", error);
    }
  }, [getURLSearchParamsString]);

  useEffect(() => {
    getArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error, getArtists };
};

export default useArtistsData;
