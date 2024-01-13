import { PlanetsService } from './planets.service';
import { Planet } from './models/planet.model';
import { CreatePlanetInput } from './inputs/createplanet.input';
import { UpdatePlanetInput } from './inputs/updateplanet.input';
import { SatellitesService } from 'src/satellites/satellites.service';
export declare class PlanetsResolver {
    private planetService;
    private satelliteService;
    constructor(planetService: PlanetsService, satelliteService: SatellitesService);
    createPlanet(createPlanetData: CreatePlanetInput): Promise<import("./schemas/planet.schema").Planet>;
    findPlanet(slug: string): Promise<any>;
    findPlanets(): Promise<any>;
    deletePlanet(slug: string): Promise<any>;
    updatePlanet(updatePlanetData: UpdatePlanetInput): Promise<any>;
    satellite(planet: Planet): Promise<any>;
}
