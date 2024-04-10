import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...rest }) {
  return http.patch(`/proposal/${proposalId}`, rest).then(({ data }) => data.data);
}

export function getProposalApi() {
  return http.get("/proposals/list").then(({ data }) => data.data);
}

export function createProposalApi(data) {
  return http.post("/proposals/add", data).then(({ data }) => data.data);
}
