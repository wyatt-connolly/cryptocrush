"use client";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import fetcher from "../utils";
import useSwr from "swr";

export function useSearch(initialQuery) {
  const [query, setQuery] = useState(initialQuery);

  const { data, error, isLoading } = useSwr(
    query ? `https://api.coingecko.com/api/v3/search?query=${query}` : null,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const debouncedSetQuery = debounce((value) => setQuery(value), 300);

  useEffect(() => {
    debouncedSetQuery(initialQuery);
  }, [initialQuery, debouncedSetQuery]);

  return {
    searchData: data,
    searchIsLoading: isLoading,
    searchError: error,
  };
}
