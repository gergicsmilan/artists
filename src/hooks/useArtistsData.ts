import { useCallback, useEffect, useState } from "react";
import { Album, ArtistsResponse, PaginationDetails } from "../types/api";

type Props = {
  getURLSearchParamsString: () => string;
};

const useArtistsData = ({ getURLSearchParamsString }: Props) => {
  const [data, setData] = useState<Required<Omit<ArtistsResponse, "message">>>({
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
      const response: ArtistsResponse = await responseJSON.json();

      if (response?.data && response?.pagination)
        setData(response as Required<Omit<ArtistsResponse, "message">>);
      if (response?.message) setError(response.message as string);

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
