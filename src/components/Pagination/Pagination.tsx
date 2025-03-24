import { Pagination as MUIPagination } from "@mui/material";

type Props = {
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  error: null | string;
  handlePaginate: (value: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  isLoading,
  error,
  handlePaginate,
}: Props) => {
  if (!totalPages || totalPages <= 1 || (!isLoading && error)) return null;

  return (
    <MUIPagination
      sx={{ alignSelf: "center" }}
      count={totalPages}
      page={currentPage}
      onChange={(_e, v) => handlePaginate(v)}
      disabled={isLoading}
    />
  );
};

export default Pagination;
