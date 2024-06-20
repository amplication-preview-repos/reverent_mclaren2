import { SeoSettings as TSeoSettings } from "../api/seoSettings/SeoSettings";

export const SEOSETTINGS_TITLE_FIELD = "keyword";

export const SeoSettingsTitle = (record: TSeoSettings): string => {
  return record.keyword?.toString() || String(record.id);
};
