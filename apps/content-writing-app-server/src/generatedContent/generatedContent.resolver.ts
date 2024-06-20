import * as graphql from "@nestjs/graphql";
import { GeneratedContentResolverBase } from "./base/generatedContent.resolver.base";
import { GeneratedContent } from "./base/GeneratedContent";
import { GeneratedContentService } from "./generatedContent.service";

@graphql.Resolver(() => GeneratedContent)
export class GeneratedContentResolver extends GeneratedContentResolverBase {
  constructor(protected readonly service: GeneratedContentService) {
    super(service);
  }
}
