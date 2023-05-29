import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import JobGrid from "./components/JobGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav" backgroundColor="red">
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" backgroundColor="blue">
          aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading>Experiences</Heading>
        <JobGrid></JobGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
