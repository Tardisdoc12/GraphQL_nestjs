import { SatellitesService } from "./satellites.service";
import { Satellite } from "./models/satellite.model";
import { CreateSatelliteInput } from "./inputs/createsatellite.input";
import { PlanetsService } from "src/planets/planets.service";
export declare class SatellitesResolver {
    private SatelliteService;
    private PlanetsService;
    constructor(SatelliteService: SatellitesService, PlanetsService: PlanetsService);
    findSatellite(slug: string): Promise<any>;
    createSatellite(createSatelliteData: CreateSatelliteInput): Promise<Satellite>;
    deleteSatellite(slug: string): Promise<any>;
    planet(Satellite: Satellite): Promise<any>;
}
