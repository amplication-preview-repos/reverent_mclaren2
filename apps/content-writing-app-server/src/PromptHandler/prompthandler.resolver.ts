import * as graphql from "@nestjs/graphql";
import { PromptFileUpload } from "../promptHandler/PromptFileUpload";
import { PromptHandlerService } from "./prompthandler.service";

export class PromptHandlerResolver {
  constructor(protected readonly service: PromptHandlerService) {}

  @graphql.Query(() => PromptFileUpload)
  async FetchPromptInstructions(
    @graphql.Args()
    args: string
  ): Promise<PromptFileUpload> {
    return this.service.FetchPromptInstructions(args);
  }

  @graphql.Query(() => String)
  async GetPromptInstructions(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetPromptInstructions(args);
  }

  @graphql.Query(() => String)
  async UploadPromptFile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadPromptFile(args);
  }

  @graphql.Mutation(() => String)
  async UploadPromptInstruction(
    @graphql.Args()
    args: PromptFileUpload
  ): Promise<string> {
    return this.service.UploadPromptInstruction(args);
  }
}
