import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  searchTerm: string;
  handleSearch: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  isLoading: boolean;
};

const SearchField = ({ handleSearch, searchTerm, isLoading }: Props) => (
  <TextField
    sx={{ marginRight: "auto" }}
    label="Search for artists"
    size="small"
    value={searchTerm}
    onChange={handleSearch}
    disabled={isLoading}
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
);

export default SearchField;
