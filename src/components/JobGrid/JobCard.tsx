import { Job } from "../../hooks/useJob";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import LanguageIconList from "../LanguageIconList/LanguageIconList";
import JobBagdes from "../Badges/JobBadges";
import { jobImagesMap } from "../../services/JobImageMap";
import LeadBadge from "../Badges/LeadBadge";

interface Props {
  job: Job;
  onCLick: (job: Job) => void;
}

const JobCard = ({ job, onCLick }: Props) => {
  return (
    <Card
      _hover={{
        cursor: "pointer",
        color: "teal.500",
        transform: "translateY(2px)",
      }}
      onClick={() => onCLick(job)}
    >
      <Image src={jobImagesMap[job.image]}></Image>
      <CardBody>
        <HStack marginBottom={2} justifyContent="space-between">
          <LanguageIconList languages={job.languages}></LanguageIconList>
          <JobBagdes job={job}></JobBagdes>
        </HStack>
        <Heading fontSize="2xl">{job.title}</Heading>
        <HStack justifyContent={"space-between"}>
          <Text>{job.role}</Text>
          {job.isLead && <LeadBadge />}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default JobCard;
