"use client";
import { createContext } from "react";

export interface ICalendlyContext {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const defaultValue: ICalendlyContext = {
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
};

export const CalendlyContext = createContext(defaultValue);
