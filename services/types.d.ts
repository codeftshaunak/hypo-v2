import { ErrorResponseType } from "types/hygraph";

export type ServiceResponseType<T> = {
  data: T | null;
  errors?: ErrorResponseType[];
};
