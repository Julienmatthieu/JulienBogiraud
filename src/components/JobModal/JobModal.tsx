import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Job } from "../../hooks/useJob";
import LanguageIconList from "../LanguageIconList/LanguageIconList";
import JobBagdes from "../Badges/JobBadges";
import LeadBadge from "../Badges/LeadBadge";
import TextBlock from "./TextBlock";

interface Props {
  job: Job;
  onClose: () => void;
}

const JobModal = ({ job, onClose }: Props) => {
  return (
    <Modal isOpen={job.id !== undefined} onClose={onClose}>
      <ModalOverlay />
      <ModalContent overflow={"hidden"}>
        <ModalHeader backgroundColor={"gray.500"}>
          <Heading fontSize="2xl">
            {job.title} - {job.role}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid>
            <GridItem>
              <LanguageIconList
                max={10}
                languages={job.languages}
              ></LanguageIconList>
              <HStack marginTop={3} marginBottom={2}>
                <JobBagdes job={job}></JobBagdes>
                {job.isLead && <LeadBadge short={false}></LeadBadge>}
              </HStack>
              <TextBlock label="Application">{job.application}</TextBlock>
              <TextBlock label="Responsibilitées">
                {job.responsibilitie}
              </TextBlock>
              {job.comment !== "" && (
                <TextBlock label="Comment">{job.comment}</TextBlock>
              )}
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JobModal;
