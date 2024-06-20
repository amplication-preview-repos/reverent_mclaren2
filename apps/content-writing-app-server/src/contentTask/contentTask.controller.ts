import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContentTaskService } from "./contentTask.service";
import { ContentTaskControllerBase } from "./base/contentTask.controller.base";

@swagger.ApiTags("contentTasks")
@common.Controller("contentTasks")
export class ContentTaskController extends ContentTaskControllerBase {
  constructor(protected readonly service: ContentTaskService) {
    super(service);
  }
}
