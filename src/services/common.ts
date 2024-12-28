import { ServiceResponseType } from "./types";

export const asyncWrapper =
  <T>(asyncFunc: () => Promise<T | null>) =>
  async (): Promise<ServiceResponseType<T>> => {
    try {
      const data = await asyncFunc();
      return { data, errors: [] };
    } catch (error: any) {
      console.log("ERROR:", error);

      if (Array.isArray(error)) {
        return { data: null, errors: error };
      }

      return {
        data: null,
        errors: [{ message: error?.message || "Error in Data Fetching" }],
      };
    }
  };
