import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import JobGrid from "./components/JobGrid";
import LanguageList from "./components/LanguageList/LanguageList";
import { Language } from "./hooks/useLanguages";
import { useState } from "react";

function App() {
  const [selectedLanguage, setCurrentLanguage] = useState<Language>(
    {} as Language
  );

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
        <GridItem area="aside" paddingX={5}>
          <LanguageList
            selectedLanguage={selectedLanguage}
            onSelectLanguage={(language) => setCurrentLanguage(language)}
          ></LanguageList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading>Experiences {selectedLanguage ? selectedLanguage.name : ""}</Heading>
        <JobGrid selectedLanguage={selectedLanguage}></JobGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
