import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

import {
  SiJavascript,
  SiDotnet,
  SiCplusplus,
  SiPostgresql,
  SiAngular,
  SiCsharp,
  SiAnaconda,
  SiC,
  SiCucumber,
  SiCss3,
  SiTypescript,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiPython } from "react-icons/di";

interface Props {
  languages: string[];
  max?: number;
}

const LanguageIconList = ({ languages, max = 5 }: Props) => {
  type NewType = IconType;

  const iconMap: { [key: string]: NewType } = {
    c: SiC,
    cpp: SiCplusplus,
    csharp: SiCsharp,
    dotnet: SiDotnet,
    dotnetcore: SiDotnet,
    angular: SiAngular,
    javascript: SiJavascript,
    mysql: GrMysql,
    postgressql: SiPostgresql,
    python: DiPython,
    vuejs: FaVuejs,
    typescript: SiTypescript,
    anaconda: SiAnaconda,
    cucumber: SiCucumber,
    css: SiCss3,
  };

  return (
    <HStack marginY={1}>
      {languages.slice(0, max).map((language) => (
        <Icon key={language} as={iconMap[language]} color="gray.400"></Icon>
      ))}
    </HStack>
  );
};

export default LanguageIconList;
