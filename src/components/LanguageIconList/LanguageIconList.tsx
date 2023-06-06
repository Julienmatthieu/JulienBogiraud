import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { iconMap } from "../../services/languageIconMap";

interface Props {
  languages: string[];
  max?: number;
}

const LanguageIconList = ({ languages, max = 5 }: Props) => {

  return (
    <HStack marginY={1}>
      {languages.slice(0, max).map((language) => (
        <Icon key={language} as={iconMap[language]} color="gray.400"></Icon>
      ))}
    </HStack>
  );
};

export default LanguageIconList;
