import {
  Resolver,
  Query,
  Args,
  Mutation,
  Parent,
  ResolveField,
} from "@nestjs/graphql";
import { SatellitesService } from "./satellites.service";
import { Satellite } from "./models/satellite.model";
import { CreateSatelliteInput } from "./inputs/createsatellite.input";
import { PlanetsService } from "src/planets/planets.service";
import { Planet } from "src/planets/models/planet.model";

@Resolver(of => Satellite)
export class SatellitesResolver {
  constructor(
    private SatelliteService: SatellitesService,
    private PlanetsService: PlanetsService
  ) {}

  @Query((returns) => Satellite)
  async findSatellite(@Args("slug", { type: () => String }) slug: string) {
    return this.SatelliteService.findOne(slug);
  }

  @Mutation((returns) => Satellite)
  async createSatellite(
    @Args("CreateSatelliteData") createSatelliteData: CreateSatelliteInput
  ) {
    return this.SatelliteService.create(createSatelliteData);
  }

  @Mutation((returns) => Satellite)
  async deleteSatellite(@Args("slug", { type: () => String }) slug: string) {
    return this.SatelliteService.delete(slug);
  }

  @ResolveField(() => Planet)
  async planet(@Parent() Satellite: Satellite) {
    const { slug } = Satellite;
    return this.PlanetsService.finOneBySatelliteSlug(slug);
  }
}
