import { SimpleGrid, Text } from "@chakra-ui/react";
import JobCard from "./JobCard";
import JobCardContainer from "./JobCardContainer";
import JobCardSkeleton from "./JobCardSkeleton";
import useJob from "../../hooks/useJob";
import { AppQuery } from "../../App";

interface Props {
  appQuery: AppQuery;
}

const JobGrid = ({ appQuery }: Props) => {
  const { data: jobs, isLoading, error } = useJob(appQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <JobCardContainer key={skeleton}>
              <JobCardSkeleton></JobCardSkeleton>
            </JobCardContainer>
          ))}
        {!isLoading &&
          jobs.map((job) => (
            <JobCardContainer key={job.id}>
              <JobCard job={job} key={job.id}></JobCard>
            </JobCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default JobGrid;
