import * as graphql from "@nestjs/graphql";
import { UserRequestResolverBase } from "./base/userRequest.resolver.base";
import { UserRequest } from "./base/UserRequest";
import { UserRequestService } from "./userRequest.service";

@graphql.Resolver(() => UserRequest)
export class UserRequestResolver extends UserRequestResolverBase {
  constructor(protected readonly service: UserRequestService) {
    super(service);
  }
}
