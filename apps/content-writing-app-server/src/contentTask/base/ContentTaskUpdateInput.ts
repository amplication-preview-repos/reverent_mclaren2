/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumContentTaskStatus } from "./EnumContentTaskStatus";
import { IsEnum, IsOptional, IsInt } from "class-validator";

@InputType()
class ContentTaskUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumContentTaskStatus,
  })
  @IsEnum(EnumContentTaskStatus)
  @IsOptional()
  @Field(() => EnumContentTaskStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  taskId?: number | null;
}

export { ContentTaskUpdateInput as ContentTaskUpdateInput };
