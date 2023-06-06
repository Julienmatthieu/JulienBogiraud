import Badges from "./Basges";

interface Props {
  short?: boolean;
}

const LeadBadge = ({ short = true }: Props) => {
  const label = short ? "Lead" : "Lead Developpeur";
  return <Badges color="teal" label={label}></Badges>;
};

export default LeadBadge;
