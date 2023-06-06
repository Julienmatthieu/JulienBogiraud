import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import JobGrid from "./components/JobGrid";
import LanguageList from "./components/LanguageList/LanguageList";
import { Language } from "./hooks/useLanguages";
import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";

export interface AppQuery {
  language: Language | null;
  searchText: string;
}

function App() {
  const [appQuery, setAppQuery] = useState<AppQuery>({} as AppQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) =>
            setAppQuery({ ...appQuery, searchText: searchText })
          }
        ></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <LanguageList
            selectedLanguage={appQuery.language}
            onSelectLanguage={(language) =>
              setAppQuery({ ...appQuery, language: language })
            }
          ></LanguageList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading>
          Experiences {appQuery.language ? appQuery.language.name : ""}{" "}
          {appQuery.searchText ? '"' + appQuery.searchText + '"' : ""}
        </Heading>
        <JobGrid appQuery={appQuery}></JobGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
