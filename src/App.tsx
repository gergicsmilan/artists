import {
  Container,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";
import List from "./components/List/List";
import { data } from "./mock";
import useURLSearchParams from "./hooks/useURLSearchParams";
import useArtistsData from "./hooks/useArtistsData";
import useListActions from "./hooks/useListActions";
import SearchIcon from "@mui/icons-material/Search";

const App = () => {
  const {
    setURLSearchParam,
    getURLSearchParamByKey,
    getURLSearchParamsString,
  } = useURLSearchParams();

  const { getArtists } = useArtistsData({
    getURLSearchParamsString,
  });

  const { actionState, handleSearch, handlePaginate } = useListActions({
    getURLSearchParamByKey,
    setURLSearchParam,
    getArtists,
  });

  return (
    <Container maxWidth="xl">
      <TextField
        sx={{ marginRight: "auto" }}
        label="Search for artists"
        size="small"
        value={actionState.searchTerm}
        onChange={handleSearch}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <List artists={data.data} />
      <Pagination
        count={data.pagination.total_pages}
        page={actionState.page}
        onChange={(_e, v) => handlePaginate(v)}
      />
    </Container>
  );
};

export default App;
