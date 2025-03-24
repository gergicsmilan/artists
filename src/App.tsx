import { Container } from "@mui/material";
import List from "./components/List/List";
import { data } from "./mock";

const App = () => {
  return (
    <Container maxWidth="xl">
      <div>search filed</div>
      <List artists={data.data} />
      <div>Pagination</div>
    </Container>
  );
};

export default App;
