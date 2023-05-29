import { Job } from "../../hooks/useJob";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

import tarrot from "../../assets/tarrot.jpg";

interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  return (
    <Card>
      <Image src={tarrot}></Image>
      <CardBody>
        <HStack marginBottom={2} justifyContent="space-between"></HStack>
        <Heading fontSize="2xl">{job.title}</Heading>
        <Text>{job.role}</Text>
      </CardBody>
    </Card>
  );
};

export default JobCard;
