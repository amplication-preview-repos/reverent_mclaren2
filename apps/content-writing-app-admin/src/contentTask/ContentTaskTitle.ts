import { ContentTask as TContentTask } from "../api/contentTask/ContentTask";

export const CONTENTTASK_TITLE_FIELD = "id";

export const ContentTaskTitle = (record: TContentTask): string => {
  return record.id?.toString() || String(record.id);
};
