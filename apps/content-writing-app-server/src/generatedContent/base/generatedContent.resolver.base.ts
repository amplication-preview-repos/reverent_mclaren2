/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { GeneratedContent } from "./GeneratedContent";
import { GeneratedContentCountArgs } from "./GeneratedContentCountArgs";
import { GeneratedContentFindManyArgs } from "./GeneratedContentFindManyArgs";
import { GeneratedContentFindUniqueArgs } from "./GeneratedContentFindUniqueArgs";
import { CreateGeneratedContentArgs } from "./CreateGeneratedContentArgs";
import { UpdateGeneratedContentArgs } from "./UpdateGeneratedContentArgs";
import { DeleteGeneratedContentArgs } from "./DeleteGeneratedContentArgs";
import { GeneratedContentService } from "../generatedContent.service";
@graphql.Resolver(() => GeneratedContent)
export class GeneratedContentResolverBase {
  constructor(protected readonly service: GeneratedContentService) {}

  async _generatedContentsMeta(
    @graphql.Args() args: GeneratedContentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [GeneratedContent])
  async generatedContents(
    @graphql.Args() args: GeneratedContentFindManyArgs
  ): Promise<GeneratedContent[]> {
    return this.service.generatedContents(args);
  }

  @graphql.Query(() => GeneratedContent, { nullable: true })
  async generatedContent(
    @graphql.Args() args: GeneratedContentFindUniqueArgs
  ): Promise<GeneratedContent | null> {
    const result = await this.service.generatedContent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GeneratedContent)
  async createGeneratedContent(
    @graphql.Args() args: CreateGeneratedContentArgs
  ): Promise<GeneratedContent> {
    return await this.service.createGeneratedContent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => GeneratedContent)
  async updateGeneratedContent(
    @graphql.Args() args: UpdateGeneratedContentArgs
  ): Promise<GeneratedContent | null> {
    try {
      return await this.service.updateGeneratedContent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GeneratedContent)
  async deleteGeneratedContent(
    @graphql.Args() args: DeleteGeneratedContentArgs
  ): Promise<GeneratedContent | null> {
    try {
      return await this.service.deleteGeneratedContent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
