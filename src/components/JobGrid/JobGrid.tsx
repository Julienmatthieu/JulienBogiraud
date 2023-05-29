import { SimpleGrid, Text } from "@chakra-ui/react";
import JobCard from "./JobCard";
import JobCardContainer from "./JobCardContainer";
import JobCardSkeleton from "./JobCardSkeleton";
import useJob, { Job } from "../../hooks/useJob";
import { Language } from "../../hooks/useLanguages";

interface Props {
  selectedLanguage: Language | null;
}

const JobGrid = ({ selectedLanguage }: Props) => {
  const { data: jobs, isLoading, error } = useJob();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const isShowable = (job: Job, language: string | undefined) => {
    if (language === undefined) return true;
    return job.languages.includes(language);
  };

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
          jobs.map(
            (job) =>
              isShowable(job, selectedLanguage?.slug) && (
                <JobCardContainer key={job.id}>
                  <JobCard job={job} key={job.id}></JobCard>
                </JobCardContainer>
              )
          )}
      </SimpleGrid>
    </>
  );
};

export default JobGrid;
