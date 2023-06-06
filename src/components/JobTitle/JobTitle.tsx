import { Heading } from "@chakra-ui/react";
import { AppQuery } from "../../App";

interface Props {
  appQuery: AppQuery;
}

const JobTitle = ({ appQuery }: Props) => {
  const heading = ` Experiences ${
    appQuery?.language?.name ? "en " + appQuery.language?.name : ""
  } ${appQuery.searchText ? '"' + appQuery.searchText + '"' : ""}`;

  return <Heading>{heading}</Heading>;
};

export default JobTitle;
