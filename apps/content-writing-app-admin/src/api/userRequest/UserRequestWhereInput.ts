import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserRequestWhereInput = {
  contentLength?: IntNullableFilter;
  contentTone?: StringNullableFilter;
  id?: StringFilter;
  requestType?: StringNullableFilter;
  youtubeLink?: StringNullableFilter;
};
