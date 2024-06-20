import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ContentTaskWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  taskId?: IntNullableFilter;
};
