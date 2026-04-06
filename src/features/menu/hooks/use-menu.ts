import { useMenuQuery } from "@/features";

export const useMenu = () => {
    const { data, isLoading, error } = useMenuQuery();

    return {
        categories: data ?? [],
        isLoading,
        error,
        hasData: !!data?.length,
    };
};