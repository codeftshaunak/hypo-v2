"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

// ----------------------------------------------------------------------

type RouterQueryReturn = [string | null, (value: string | null) => void];

// ----------------------------------------------------------------------

const useRouterQuery = (key: string): RouterQueryReturn => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const value = searchParams.get(key);

  const setValue = useCallback(
    (newValue: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newValue) {
        params.set(key, newValue);
      } else {
        params.delete(key);
      }
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      router.push(newUrl);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, searchParams]
  );

  return [value, setValue];
};

export default useRouterQuery;
