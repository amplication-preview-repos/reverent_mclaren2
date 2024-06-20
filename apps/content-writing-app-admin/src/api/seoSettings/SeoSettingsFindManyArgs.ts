import { SeoSettingsWhereInput } from "./SeoSettingsWhereInput";
import { SeoSettingsOrderByInput } from "./SeoSettingsOrderByInput";

export type SeoSettingsFindManyArgs = {
  where?: SeoSettingsWhereInput;
  orderBy?: Array<SeoSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
