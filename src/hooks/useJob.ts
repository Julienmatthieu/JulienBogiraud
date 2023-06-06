import { AppQuery } from "../App";
import jobs from "../data/jobs";

export interface Job {
    id: number;
    title: string;
    role: string;
    desc: string;
    languages: string[],
    isLead: true,
    durationMonths: number,
    image: string
  }

  // Will be remove when a backend is added 
  // #region Start
  function myIncludes(origin: string, value: string): boolean {
    return (origin.toUpperCase().includes(value.toUpperCase()));
  }

  function isShowable(job: Job, appQuery: AppQuery): boolean {
    debugger;
    var language = appQuery?.language?.slug ? appQuery.language.slug : '';
    var seachText = appQuery.searchText ? appQuery.searchText : '';
    var isShowable = true;

    isShowable = (myIncludes(job.desc, seachText) || myIncludes(job.role, seachText) || myIncludes(job.title, seachText))

    if (isShowable && (seachText === '' || language !== ''))
    isShowable =  (job.languages.includes(language) || language === '')
    return isShowable;
  }

  // #region End

const useGenres = (appQuery: AppQuery) => ({data: jobs.filter(job => isShowable(job as Job, appQuery)) as Job[], isLoading: false, error: false});
// Minimalising data call for stable data
// useData<Genre>('/jobs');

export default useGenres;
