import type { ReservationResponseType } from "@/features";
import { queryKeys } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";

export const useConfirmation = () => {
  const queryClient = useQueryClient();

  const reservation = queryClient.getQueryData<ReservationResponseType>(
    queryKeys.reservation.assign()
  );

  return {
    reservation,
  };
};