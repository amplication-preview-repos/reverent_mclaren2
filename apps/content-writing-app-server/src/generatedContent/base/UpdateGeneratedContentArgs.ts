/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GeneratedContentWhereUniqueInput } from "./GeneratedContentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GeneratedContentUpdateInput } from "./GeneratedContentUpdateInput";

@ArgsType()
class UpdateGeneratedContentArgs {
  @ApiProperty({
    required: true,
    type: () => GeneratedContentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GeneratedContentWhereUniqueInput)
  @Field(() => GeneratedContentWhereUniqueInput, { nullable: false })
  where!: GeneratedContentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GeneratedContentUpdateInput,
  })
  @ValidateNested()
  @Type(() => GeneratedContentUpdateInput)
  @Field(() => GeneratedContentUpdateInput, { nullable: false })
  data!: GeneratedContentUpdateInput;
}

export { UpdateGeneratedContentArgs as UpdateGeneratedContentArgs };