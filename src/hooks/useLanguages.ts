import languages from "../data/language";

export interface Language {
    id: number;
    name: string;
    slug: string
  }

const useLanguages = () => ({data: languages as Language[], isLoading: false, error: false});
// Minimalising data call for stable data
// useData<Genre>('/jobs');

export default useLanguages;
