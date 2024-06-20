import { SortOrder } from "../../util/SortOrder";

export type UserRequestOrderByInput = {
  contentLength?: SortOrder;
  contentTone?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  requestType?: SortOrder;
  updatedAt?: SortOrder;
  youtubeLink?: SortOrder;
};
