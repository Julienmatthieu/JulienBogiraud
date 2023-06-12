import { Job } from "../../hooks/useJob";
import Badges from "./Basges";

interface Props {
  job: Job;
}

const JobBagdes = ({ job }: Props) => {
  return (
    <Badges
      color="yellow"
      label={`${job.durationMonths} ${job.durationMonths > 1 ? " ans" : " an"}`}
    ></Badges>
  );
};

export default JobBagdes;
