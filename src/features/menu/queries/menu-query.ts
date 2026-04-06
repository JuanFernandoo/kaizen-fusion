import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared";
import { getMenuService } from "@/features";

export const useMenuQuery = () => {
  return useQuery({
    queryKey: queryKeys.menu.list(),
    queryFn: getMenuService,
  });
};