import { Job } from "../../hooks/useJob";
import Badges from "./Basges";

interface Props {
  job: Job;
}

const JobBagdes = ({ job }: Props) => {
  return <Badges color="yellow" label={job.durationMonths + " ans"}></Badges>;
};

export default JobBagdes;
