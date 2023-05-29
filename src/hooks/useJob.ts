import jobs from "../data/jobs";

export interface Job {
    id: number;
    title: string;
    role: string;
    desc: string;
    tech: string[],
    isLead: true,
    durationMonths: number
  }

const useGenres = () => ({data: jobs, isLoading: false, error: false});
// Minimalising data call for stable data
// useData<Genre>('/jobs');

export default useGenres;
