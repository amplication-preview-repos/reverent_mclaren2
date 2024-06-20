export type SeoSettings = {
  createdAt: Date;
  id: string;
  keyword: string | null;
  metaDescription: string | null;
  tags?: Array<"Option1">;
  updatedAt: Date;
};
