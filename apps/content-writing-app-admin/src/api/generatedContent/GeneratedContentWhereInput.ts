import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GeneratedContentWhereInput = {
  contentText?: StringNullableFilter;
  id?: StringFilter;
  seoScore?: FloatNullableFilter;
};
