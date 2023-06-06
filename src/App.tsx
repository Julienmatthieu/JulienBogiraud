import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import JobGrid from "./components/JobGrid";
import LanguageList from "./components/LanguageList/LanguageList";
import { Language } from "./hooks/useLanguages";
import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import JobTitle from "./components/JobTitle/JobTitle";
import { Job } from "./hooks/useJob";
import JobModal from "./components/JobModal/JobModal";
import DownloadPdf from "./services/downloadPdf";

export interface AppQuery {
  language: Language | null;
  searchText: string;
}

function App() {
  const [appQuery, setAppQuery] = useState<AppQuery>({} as AppQuery);
  const [selectedJob, setSelectedJob] = useState({} as Job);

  function onSelectLanguage(language: Language): void {
    if (appQuery.language && language.id === appQuery.language.id)
      language = {} as Language;
    setAppQuery({ ...appQuery, language: language });
  }

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
            onSelectLanguage={(language) => onSelectLanguage(language)}
          ></LanguageList>
          <DownloadPdf></DownloadPdf>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Show above="lg">
          <HStack>
            <JobTitle appQuery={appQuery}></JobTitle>
          </HStack>
        </Show>
        <Show below="lg">
          <HStack justifyContent={"space-around"}>
            <JobTitle appQuery={appQuery}></JobTitle>
            <DownloadPdf size="50%"></DownloadPdf>
          </HStack>
        </Show>
        <JobGrid
          onCLick={(job) => {
            console.table(job);
            setSelectedJob({ ...job });
          }}
          appQuery={appQuery}
        ></JobGrid>
      </GridItem>
      <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob({} as Job)}
      ></JobModal>
    </Grid>
  );
}

export default App;
