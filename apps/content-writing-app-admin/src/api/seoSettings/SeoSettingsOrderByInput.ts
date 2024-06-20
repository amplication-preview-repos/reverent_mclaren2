import { SortOrder } from "../../util/SortOrder";

export type SeoSettingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  keyword?: SortOrder;
  metaDescription?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
};
