"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const useRouteChanged = (fn: () => void) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = `${pathname}?${searchParams.toString()}`;
    if (previousPath.current && previousPath.current !== currentPath) {
      fn();
      console.log("App is changing to:", currentPath);
    }
    previousPath.current = currentPath;
  }, [pathname, searchParams, fn]);
};

export default useRouteChanged;
