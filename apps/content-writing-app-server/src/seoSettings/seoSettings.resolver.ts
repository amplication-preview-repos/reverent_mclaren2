import * as graphql from "@nestjs/graphql";
import { SeoSettingsResolverBase } from "./base/seoSettings.resolver.base";
import { SeoSettings } from "./base/SeoSettings";
import { SeoSettingsService } from "./seoSettings.service";

@graphql.Resolver(() => SeoSettings)
export class SeoSettingsResolver extends SeoSettingsResolverBase {
  constructor(protected readonly service: SeoSettingsService) {
    super(service);
  }
}
