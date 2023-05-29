import jobs from "../data/jobs";

export interface Job {
    id: number;
    title: string;
    role: string;
    yearStart: number,
    yearEnd: number,
    desc: string;
  }

const useGenres = () => ({data: jobs, isLoading: false, error: false});
// Minimalising data call for stable data
// useData<Genre>('/jobs');

export default useGenres;
