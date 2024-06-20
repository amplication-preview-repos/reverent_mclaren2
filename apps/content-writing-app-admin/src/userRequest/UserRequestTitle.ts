import { UserRequest as TUserRequest } from "../api/userRequest/UserRequest";

export const USERREQUEST_TITLE_FIELD = "contentTone";

export const UserRequestTitle = (record: TUserRequest): string => {
  return record.contentTone?.toString() || String(record.id);
};
