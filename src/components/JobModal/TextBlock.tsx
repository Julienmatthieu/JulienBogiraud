import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";
interface Props {
  label: string;
  children: ReactNode;
}

const TextBlock = ({ label, children }: Props) => {
  return (
    <>
      <Text>
        <b>{label}</b>: <br />
        {children}
      </Text>
    </>
  );
};

export default TextBlock;
