import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useMenu() {
  const { data, error } = useSWR(`/api/menu`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
