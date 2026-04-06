import { queryKeys } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignTableService, type ReservationRequestType } from "@/features";
import { useNavigate } from "@tanstack/react-router";

export const useAssignTableMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: queryKeys.reservation.assign(),

    mutationFn: (data: ReservationRequestType) =>
      assignTableService(data),

    onSuccess: (data) => {
      queryClient.setQueryData(
        queryKeys.reservation.assign(),
        data
      );

      queryClient.invalidateQueries({
        queryKey: queryKeys.reservation.all,
      });

      navigate({ to: "/confirmation" });
    },
  });
};