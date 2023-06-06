import { Job } from "../../hooks/useJob";
import Badges from "../Badges/Basges";

interface Props {
  job: Job;
}

const JobBagdes = ({ job }: Props) => {
  return <Badges color="yellow" label={job.durationMonths + " mois"}></Badges>;
};

export default JobBagdes;
