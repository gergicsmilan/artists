import { Container, SxProps, Theme } from "@mui/material";
import useArtistsData from "./hooks/useArtistsData";
import List from "./components/List/List";
import SearchField from "./components/SearchField/SearchField";
import useURLSearchParams from "./hooks/useURLSearchParams";
import useListActions from "./hooks/useListActions";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const {
    setURLSearchParam,
    getURLSearchParamByKey,
    getURLSearchParamsString,
  } = useURLSearchParams();

  const { data, isLoading, error, getArtists } = useArtistsData({
    getURLSearchParamsString,
  });

  const { actionState, handleSearch, handlePaginate } = useListActions({
    getURLSearchParamByKey,
    setURLSearchParam,
    getArtists,
  });

  const sx: SxProps<Theme> = {
    padding: "0.6rem 1rem",
    display: "flex",
    flexFlow: "column",
    gap: "1rem",
  };

  return (
    <Container maxWidth="xl" sx={sx}>
      <SearchField
        searchTerm={actionState.searchTerm}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      <List artists={data.data} isLoading={isLoading} error={error} />
      <Pagination
        totalPages={data.pagination.total_pages}
        currentPage={actionState.page}
        handlePaginate={handlePaginate}
        isLoading={isLoading}
        error={error}
      />
    </Container>
  );
}

export default App;
