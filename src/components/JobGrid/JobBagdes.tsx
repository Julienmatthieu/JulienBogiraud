import { Badge, HStack } from "@chakra-ui/react";
import { Job } from "../../hooks/useJob";
import Badges from "../Badges/Basges";

interface Props {
  job: Job;
}

const JobBagdes = ({ job }: Props) => {
  return (
    <HStack>
      <Badges color="yellow" label={job.durationMonths + " mois"}></Badges>
    </HStack>
  );
};

export default JobBagdes;
