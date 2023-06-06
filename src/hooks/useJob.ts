import { AppQuery } from "../App";
import jobs from "../data/jobs";

export interface Job {
    id: number;
    title: string;
    role: string;
    application: string,
    responsibilitie: string
    comment: string,
    languages: string[],
    isLead: true,
    durationMonths: number,
    image: string
  }

  // Will be remove when a backend is added 

  function isShowable(job: Job, appQuery: AppQuery): boolean {
    var language = appQuery?.language?.slug ? appQuery.language.slug : '';
    var seachText = appQuery.searchText ? appQuery.searchText : '';
    var isShowable = true;
    var jobText = `${job.title} ${job.role} ${job.application} ${job.comment}`.toUpperCase();
    

    isShowable = jobText.includes(seachText);

    if (isShowable && (seachText === '' || language !== ''))
    isShowable =  (job.languages.includes(language) || language === '')
    return isShowable;
  }

  // #region End

const useGenres = (appQuery: AppQuery) => ({data: jobs.filter(job  => isShowable(job as Job, appQuery)) as unknown as Job[], isLoading: false, error: false});
// Minimalising data call for stable data
// useData<Genre>('/jobs');

export default useGenres;
