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
import { UserRequestWhereInput } from "./UserRequestWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UserRequestCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserRequestWhereInput,
  })
  @Field(() => UserRequestWhereInput, { nullable: true })
  @Type(() => UserRequestWhereInput)
  where?: UserRequestWhereInput;
}

export { UserRequestCountArgs as UserRequestCountArgs };