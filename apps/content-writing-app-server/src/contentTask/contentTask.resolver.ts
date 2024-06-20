import * as graphql from "@nestjs/graphql";
import { ContentTaskResolverBase } from "./base/contentTask.resolver.base";
import { ContentTask } from "./base/ContentTask";
import { ContentTaskService } from "./contentTask.service";

@graphql.Resolver(() => ContentTask)
export class ContentTaskResolver extends ContentTaskResolverBase {
  constructor(protected readonly service: ContentTaskService) {
    super(service);
  }
}
