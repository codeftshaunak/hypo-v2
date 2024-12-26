"use client";
import { useContext } from "react";
import { CalendlyContext } from "./context";

export const useCalendly = () => {
  const value = useContext(CalendlyContext);

  if (!value) throw new Error("hooks cannot be used outside provider");

  return value;
};
