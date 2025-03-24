import { ChangeEvent, useCallback, useState } from "react";
import { PAGINATION_PARAM, SEARCH_PARAM } from "./useURLSearchParams";

type Props = {
  setURLSearchParam: (key: string, value: string) => void;
  getURLSearchParamByKey: (key: string) => string | null;
  getArtists: () => void;
};

const useListActions = ({
  setURLSearchParam,
  getURLSearchParamByKey,
  getArtists,
}: Props) => {
  const [actionState, setActionState] = useState({
    page: getURLSearchParamByKey(PAGINATION_PARAM) ?? 1,
    searchTerm: getURLSearchParamByKey(SEARCH_PARAM) ?? "",
  });

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = e.target.value;

      setActionState((prevState) => {
        if (prevState.searchTerm !== value) {
          setURLSearchParam(PAGINATION_PARAM, "1");
          return { page: 1, searchTerm: value };
        }
        return prevState;
      });
      setURLSearchParam(SEARCH_PARAM, value);

      getArtists();
    },
    [getArtists, setURLSearchParam]
  );

  const handlePaginate = useCallback(
    (value: number) => {
      setActionState((prevState) => ({ ...prevState, page: value }));
      setURLSearchParam(PAGINATION_PARAM, value.toString());
      getArtists();
    },
    [setURLSearchParam, getArtists]
  );

  return {
    actionState: { ...actionState, page: +actionState.page },
    handleSearch,
    handlePaginate,
  };
};

export default useListActions;
