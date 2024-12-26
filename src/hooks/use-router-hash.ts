"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const getHash = (): string | null | undefined => {
  // if window is not defined then return undefined
  if (typeof window === "undefined") return undefined;

  // destructure hash
  const hash = window.location.hash;

  // if hash is an empty string then return null
  if (hash === "") return null;

  return hash;
};

/**
 * get url hash.
 * if value is string then it means value is valid.
 * if value is null means value is empty
 * if value is undefined means value is loading
 * @returns {string | null | undefined}
 */
const useRouterHash = (): [
  string | null | undefined,
  (hash: string) => void
] => {
  const [isClient, setIsClient] = useState(false);
  const [hash, setHash] = useState<string | null | undefined>(getHash());

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
    setHash(getHash());
  }, [pathname, searchParams]);

  const updateHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
        setHash(newHash);
      }
    },
    [hash]
  );

  return [isClient ? hash : undefined, updateHash];
};

export default useRouterHash;
