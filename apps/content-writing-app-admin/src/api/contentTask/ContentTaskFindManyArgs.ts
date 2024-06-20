import { ContentTaskWhereInput } from "./ContentTaskWhereInput";
import { ContentTaskOrderByInput } from "./ContentTaskOrderByInput";

export type ContentTaskFindManyArgs = {
  where?: ContentTaskWhereInput;
  orderBy?: Array<ContentTaskOrderByInput>;
  skip?: number;
  take?: number;
};
