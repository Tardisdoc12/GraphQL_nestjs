"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const planet_schema_1 = require("./schemas/planet.schema");
const sluger_service_1 = require("../sluger/sluger.service");
const satellites_service_1 = require("../satellites/satellites.service");
let PlanetsService = class PlanetsService {
    constructor(planetsModel, satellitesService) {
        this.planetsModel = planetsModel;
        this.satellitesService = satellitesService;
    }
    async create(createPlanetDto) {
        createPlanetDto.slug = (0, sluger_service_1.slugify)(createPlanetDto.name);
        const createdPlanet = new this.planetsModel(createPlanetDto);
        return createdPlanet.save();
    }
    async addSatellite(planetId, satelliteId) {
        try {
            const planet = await this.planetsModel.findById(planetId).exec();
            planet.satellites.push(satelliteId);
            return await planet.save();
        }
        catch (err) {
            return err;
        }
    }
    async removeSatellite(planetSlug, satelliteId) {
        var planet = await this.planetsModel.findOneAndUpdate({ slug: planetSlug }, { $pull: { satellites: satelliteId } }, { new: true }).exec();
        return planet;
    }
    async findOne(slug) {
        try {
            return await this.planetsModel.findOne({ slug: slug }).exec();
        }
        catch (err) {
            return err;
        }
    }
    async finOneBySatelliteSlug(slug) {
        try {
            const satellite = await this.satellitesService.findOne(slug);
            const id_planet = satellite.planet;
            return (await this.planetsModel.findById(id_planet).exec());
        }
        catch (err) {
            return err;
        }
    }
    async findAll() {
        try {
            return await this.planetsModel.find().exec();
        }
        catch (err) {
            return err;
        }
    }
    async delete(slug) {
        try {
            const planet = this.planetsModel.findOneAndDelete({ slug: slug }).exec();
            return planet;
        }
        catch (err) {
            return err;
        }
    }
    async update(updatePlanetDto) {
        try {
            const planet = this.planetsModel.findOneAndUpdate({ slug: updatePlanetDto.slug }, updatePlanetDto).exec();
            return planet;
        }
        catch (err) {
            return err;
        }
    }
};
exports.PlanetsService = PlanetsService;
exports.PlanetsService = PlanetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(planet_schema_1.Planet.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => satellites_service_1.SatellitesService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        satellites_service_1.SatellitesService])
], PlanetsService);
//# sourceMappingURL=planets.service.js.map