import {
  Button,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
} from "@chakra-ui/react";
import useLanguages, { Language } from "../../hooks/useLanguages";
import { iconMap } from "../../data/languageIconMap";

interface Props {
  selectedLanguage: Language | null;
  onSelectLanguage: (language: Language) => void;
}

const LanguageList = ({ selectedLanguage, onSelectLanguage }: Props) => {
  const { data: languages, error: error } = useLanguages();

  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2} paddingY={3}>
        Langages
      </Heading>
      <List>
        {languages.map((language) => {
          return (
            <ListItem paddingX={5} paddingY={1}>
              <HStack>
                <Icon
                  key={language.id}
                  as={iconMap[language.slug]}
                  color="gray.400"
                ></Icon>
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  objectFit="cover"
                  fontWeight={
                    selectedLanguage && selectedLanguage?.slug == language?.slug
                      ? "bold"
                      : "none"
                  }
                  onClick={() => onSelectLanguage(language as Language)}
                  variant="link"
                  fontSize="xl"
                >
                  {language?.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default LanguageList;
