import { ServiceResponseType } from "./types";

export const asyncWrapper =
  <T, Args extends any[] = []>(
    asyncFunc: (...args: Args) => Promise<T | null>
  ) =>
  async (...args: Args): Promise<ServiceResponseType<T>> => {
    try {
      const data = await asyncFunc(...args);
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
