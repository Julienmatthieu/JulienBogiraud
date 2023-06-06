import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Job } from "../../hooks/useJob";

interface Props {
  job: Job;
  onClose: () => void;
}

const JobModal = ({ job, onClose }: Props) => {
  return (
    <Modal isOpen={job?.id !== undefined} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`${job.title} - ${job.role}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{job.desc}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JobModal;
