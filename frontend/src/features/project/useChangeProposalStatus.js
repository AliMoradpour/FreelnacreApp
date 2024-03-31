import { useMutaiton, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import ChangeProposalStatus from "./ChangeProposalStatus";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();

  const { isPending: isupdating, mutate: ChangeProposalStatus } = useMutaiton({
    mutationFn: ChangeProposalStatus,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isupdating, ChangeProposalStatus };
}
