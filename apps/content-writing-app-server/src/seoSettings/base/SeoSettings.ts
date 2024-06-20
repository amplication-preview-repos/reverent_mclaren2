/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumSeoSettingsTags } from "./EnumSeoSettingsTags";

@ObjectType()
class SeoSettings {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keyword!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  metaDescription!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSeoSettingsTags,
    isArray: true,
  })
  @IsEnum(EnumSeoSettingsTags, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumSeoSettingsTags], {
    nullable: true,
  })
  tags?: Array<"Option1">;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { SeoSettings as SeoSettings };