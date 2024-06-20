import { Injectable } from "@nestjs/common";
import { PromptFileUpload } from "../promptHandler/PromptFileUpload";

@Injectable()
export class PromptHandlerService {
  constructor() {}
  async FetchPromptInstructions(args: string): Promise<PromptFileUpload> {
    throw new Error("Not implemented");
  }
  async GetPromptInstructions(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadPromptFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadPromptInstruction(args: PromptFileUpload): Promise<string> {
    throw new Error("Not implemented");
  }
}
