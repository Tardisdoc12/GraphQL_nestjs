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
exports.SatellitesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const planets_service_1 = require("../planets/planets.service");
const sluger_service_1 = require("../sluger/sluger.service");
let SatellitesService = class SatellitesService {
    constructor(satelliteModel, planetsService) {
        this.satelliteModel = satelliteModel;
        this.planetsService = planetsService;
    }
    async findOne(slug) {
        try {
            return (await this.satelliteModel.findOne({ slug: slug }).exec());
        }
        catch (err) {
            return err;
        }
    }
    async findAllByPlanetSlug(slug) {
        try {
            const planet = await this.planetsService.findOne(slug);
            const satellitesForPlanet = planet.satellites;
            return await this.satelliteModel.find({ _id: { $in: satellitesForPlanet } }).exec();
        }
        catch (err) {
            return err;
        }
    }
    async delete(SatelliteSlug) {
        try {
            const satellite = await this.satelliteModel.findOne({ slug: SatelliteSlug }).exec();
            const { slug } = satellite.planet;
            await this.planetsService.removeSatellite(slug, satellite._id);
            return await this.satelliteModel.deleteOne({ slug: SatelliteSlug }).exec();
        }
        catch (err) {
            return err;
        }
    }
    async create(createSatelliteDto) {
        createSatelliteDto.slug = (0, sluger_service_1.slugify)(createSatelliteDto.name);
        const createdSatellite = new this.satelliteModel(createSatelliteDto);
        const satellite = await createdSatellite.save();
        await this.planetsService.addSatellite(createSatelliteDto.planet, satellite._id.toString());
        return satellite;
    }
};
exports.SatellitesService = SatellitesService;
exports.SatellitesService = SatellitesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Satellite')),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => planets_service_1.PlanetsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        planets_service_1.PlanetsService])
], SatellitesService);
//# sourceMappingURL=satellites.service.js.map