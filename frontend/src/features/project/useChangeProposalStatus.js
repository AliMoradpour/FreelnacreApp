import { useMutaiton } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";

export default function useChangeProposalStatus() {
  const { isPending: isupdating, mutate: changeProposalStatus } = useMutaiton({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isupdating, changeProposalStatus };
}
