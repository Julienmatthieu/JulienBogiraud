import {
  Grid,
  GridItem,
  HStack,
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

interface Props {
  job: Job;
  onClose: () => void;
}

const JobModal = ({ job, onClose }: Props) => {
  return (
    <Modal isOpen={job?.id !== undefined} onClose={onClose}>
      <ModalOverlay />

      <ModalContent overflow={"hidden"}>
        <ModalHeader
          backgroundColor={"gray.500"}
        >{`${job.title} - ${job.role}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid>
            <GridItem>
              <LanguageIconList
                max={job?.languages?.length ?? 0}
                languages={job?.languages}
              ></LanguageIconList>
              <HStack marginTop={3} marginBottom={2}>
                <JobBagdes job={job}></JobBagdes>
                {job.isLead && <LeadBadge short={false}></LeadBadge>}
              </HStack>
            </GridItem>
          </Grid>
          {job.desc}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JobModal;
