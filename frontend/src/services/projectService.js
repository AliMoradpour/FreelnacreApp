import http from "./httpService";

export default function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi(id){
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export default function createProjectApi(data) {
  return http.post("/project/add" , data).then(({ data }) => data.data);
}