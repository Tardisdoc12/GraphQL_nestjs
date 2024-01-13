/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from 'mongoose';
import { Planet } from './schemas/planet.schema';
import { CreatePlanetInput } from './inputs/createplanet.input';
import { UpdatePlanetInput } from './inputs/updateplanet.input';
import { SatellitesService } from 'src/satellites/satellites.service';
export declare class PlanetsService {
    private planetsModel;
    private satellitesService;
    constructor(planetsModel: Model<Planet>, satellitesService: SatellitesService);
    create(createPlanetDto: CreatePlanetInput): Promise<Planet>;
    addSatellite(planetId: string, satelliteId: string): Promise<any>;
    removeSatellite(planetSlug: string, satelliteId: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, Planet> & Planet & {
        _id: Types.ObjectId;
    }>;
    findOne(slug: string): Promise<any>;
    finOneBySatelliteSlug(slug: string): Promise<any>;
    findAll(): Promise<any>;
    delete(slug: string): Promise<any>;
    update(updatePlanetDto: UpdatePlanetInput): Promise<any>;
}
