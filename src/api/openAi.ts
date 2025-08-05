import { requests } from "./../utils/request";


export const createAssessment = (data: any) => {
  return requests.post("/resume/ask", data);
};