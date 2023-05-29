import { Badge, HStack } from "@chakra-ui/react";
import { Job } from "../../hooks/useJob";
import ".";

interface Props {
  job: Job;
}

const JobBagdes = ({ job }: Props) => {
  return (
    <HStack>
      {/* {job.isLead && (
         Ajouter sur l'image 
        <Badge
          colorScheme={"green"}
          fontSize="10px"
          paddingX={3}
          borderRadius="4px"
        >
          Lead Dev
        </Badge>
      )} */}
      {job.durationMonths && (
        <Badge
          colorScheme={"yellow"}
          fontSize="10px"
          paddingX={3}
          borderRadius="4px"
        >
          {job.durationMonths} mois
        </Badge>
      )}
    </HStack>
  );
};

export default JobBagdes;
