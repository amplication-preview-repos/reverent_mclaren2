import { SortOrder } from "../../util/SortOrder";

export type ContentTaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
