import { useCallback } from "react";

type Props = {
  getURLSearchParamsString: () => string;
};

const useArtistsData = ({ getURLSearchParamsString }: Props) => {
  const getArtists = useCallback(() => {
    const queryParamsString = getURLSearchParamsString();
    console.log("queryParamsString:", queryParamsString);
  }, [getURLSearchParamsString]);

  return { getArtists };
};

export default useArtistsData;
