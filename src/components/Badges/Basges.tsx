import { Badge } from "@chakra-ui/react";

interface Props {
  color?: "yellow" | "teal";
  label: string;
}

const Badges = ({ color = "yellow", label }: Props) => {
  return (
    <Badge colorScheme={color} fontSize="10px" paddingX={3} borderRadius="4px">
      {label}
    </Badge>
  );
};

export default Badges;
