import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PromptHandlerService } from "./prompthandler.service";
import { PromptFileUpload } from "../promptHandler/PromptFileUpload";

@swagger.ApiTags("promptHandlers")
@common.Controller("promptHandlers")
export class PromptHandlerController {
  constructor(protected readonly service: PromptHandlerService) {}

  @common.Get("/prompt-instructions")
  @swagger.ApiOkResponse({
    type: PromptFileUpload
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchPromptInstructions(
    @common.Body()
    body: PromptFileUpload
  ): Promise<PromptFileUpload> {
        return this.service.FetchPromptInstructions(body);
      }

  @common.Get("/:id/get-prompt-instructions")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPromptInstructions(
    @common.Body()
    body: PromptFileUpload
  ): Promise<string> {
        return this.service.GetPromptInstructions(body);
      }

  @common.Get("/:id/upload-prompt-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPromptFile(
    @common.Body()
    body: PromptFileUpload
  ): Promise<string> {
        return this.service.UploadPromptFile(body);
      }

  @common.Post("/upload-prompt")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPromptInstruction(
    @common.Body()
    body: PromptFileUpload
  ): Promise<string> {
        return this.service.UploadPromptInstruction(body);
      }
}
