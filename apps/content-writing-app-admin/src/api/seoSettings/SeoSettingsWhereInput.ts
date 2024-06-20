import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SeoSettingsWhereInput = {
  id?: StringFilter;
  keyword?: StringNullableFilter;
  metaDescription?: StringNullableFilter;
};
