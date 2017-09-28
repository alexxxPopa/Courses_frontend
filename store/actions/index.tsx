import axios from 'axios';
import { AxiosPromise } from 'axios';

export const SEARCH_COURSE='SEARCH_COURSE';
const ROOT_URL = 'http://localhost:8080/getCourse';

interface searchCourseResult {
  type: string,
  payload: AxiosPromise
}

export function searchCourse(course:string):searchCourseResult {
  const URL = `${ROOT_URL}&q={course}`;
  const request = axios.get(URL);

  return {
    type: SEARCH_COURSE,
    payload: request
  }
}