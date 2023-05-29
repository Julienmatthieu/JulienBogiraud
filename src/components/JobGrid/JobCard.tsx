import { Job } from "../../hooks/useJob";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import LanguageIconList from "../LanguageIconList/LanguageIconList";
import JobBagdes from "./JobBagdes";

interface Props {
  job: Job;
}
import tarrot from "../../assets/tarrot.jpg";

const JobCard = ({ job }: Props) => {
  return (
    <Card>
      <Image src={tarrot}></Image>
      <CardBody>
        <HStack marginBottom={2} justifyContent="space-between">
          <LanguageIconList languages={job.tech}></LanguageIconList>
          <JobBagdes job={job}></JobBagdes>
        </HStack>
        <Heading fontSize="2xl">{job.title}</Heading>
        <Text>{job.role}</Text>
      </CardBody>
    </Card>
  );
};

export default JobCard;
