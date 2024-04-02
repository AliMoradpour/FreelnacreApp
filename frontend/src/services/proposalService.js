import http from "./httpService";

export function changeProposalStatusApi({ id, data }) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}

export function getProposalApi() {
  return http.get("/proposals/list").then(({ data }) => data.data);
}
