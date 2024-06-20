import { GeneratedContent as TGeneratedContent } from "../api/generatedContent/GeneratedContent";

export const GENERATEDCONTENT_TITLE_FIELD = "id";

export const GeneratedContentTitle = (record: TGeneratedContent): string => {
  return record.id?.toString() || String(record.id);
};
