import { useCallback, useMemo } from "react";

const PER_PAGE = 50;
const INCLUDE_IMAGE = true;

export const PAGINATION_PARAM = "page";
export const SEARCH_PARAM = "search";

const useURLSearchParams = () => {
  const _updateSearchURL = useCallback((key: string, value: string) => {
    const url = new URL(window.location.href);
    const trimmedValue = value.trim();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    trimmedValue === ""
      ? url.searchParams.delete(key)
      : url.searchParams.set(key, encodeURI(trimmedValue));

    history.pushState({}, "", url.href);
  }, []);

  const urlSearchParams = useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("include_image", `${INCLUDE_IMAGE}`);
    urlSearchParams.set("per_page", `${PER_PAGE}`);

    if (!urlSearchParams.get(PAGINATION_PARAM)) {
      urlSearchParams.set(PAGINATION_PARAM, "1");
      _updateSearchURL(PAGINATION_PARAM, "1");
    }

    return urlSearchParams;
  }, [_updateSearchURL]);

  const getURLSearchParamByKey = useCallback(
    (key: string) => {
      const value = urlSearchParams.get(key);

      return value ? decodeURI(value) : null;
    },
    [urlSearchParams]
  );

  const setURLSearchParam = useCallback(
    (key: string, value: string) => {
      const trimmedValue = value.trim();

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      trimmedValue === ""
        ? urlSearchParams.delete(key)
        : urlSearchParams.set(key, trimmedValue);

      _updateSearchURL(key, value);
    },
    [urlSearchParams, _updateSearchURL]
  );

  const getURLSearchParamsString = useCallback(
    () => urlSearchParams.toString(),
    [urlSearchParams]
  );

  return {
    getURLSearchParamByKey,
    setURLSearchParam,
    getURLSearchParamsString,
  };
};

export default useURLSearchParams;
