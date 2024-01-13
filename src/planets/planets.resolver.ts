import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PlanetsService } from './planets.service';
import { Planet } from './models/planet.model';
import { CreatePlanetInput } from './inputs/createplanet.input';
import { UpdatePlanetInput } from './inputs/updateplanet.input';
import { Satellite } from 'src/satellites/models/satellite.model';
import { SatellitesService } from 'src/satellites/satellites.service';


@Resolver(of => Planet)
export class PlanetsResolver {
    constructor(
        private planetService: PlanetsService,
        private satelliteService: SatellitesService,
      ) {}

      
      @Mutation(returns => Planet)
      async createPlanet(
        @Args('CreatePlanetData') createPlanetData: CreatePlanetInput,
      ) {
        return this.planetService.create( createPlanetData );
      }

      @Query(returns => Planet)
      async findPlanet(@Args('slug', { type: () => String }) slug: string) {
        return this.planetService.findOne(slug);
      }

      @Query(returns => [Planet])
      async findPlanets() {
        return this.planetService.findAll();
      }

      @Mutation(returns => Planet)
      async deletePlanet(@Args('slug', { type: () => String }) slug: string) {
        return this.planetService.delete(slug);
      }

      @Mutation(returns => Planet)
      async updatePlanet(
        @Args('UpdatePlanetData') updatePlanetData: UpdatePlanetInput
      ) {
        return this.planetService.update(updatePlanetData);
      }
    
      @ResolveField(() => [Satellite])
      async satellite(@Parent() planet: Planet) {
        const { slug } = planet;
        return this.satelliteService.findAllByPlanetSlug(slug);
      }
}
