import { Container, Pagination } from "@mui/material";
import List from "./components/List/List";
import { data } from "./mock";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <Container maxWidth="xl">
      <div>search filed</div>
      <List artists={data.data} />
      <Pagination
        count={data.pagination.total_pages}
        page={page}
        onChange={(_e, v) => setPage(v)}
      />
    </Container>
  );
};

export default App;
