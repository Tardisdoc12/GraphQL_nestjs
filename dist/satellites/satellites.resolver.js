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
exports.SatellitesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const satellites_service_1 = require("./satellites.service");
const satellite_model_1 = require("./models/satellite.model");
const createsatellite_input_1 = require("./inputs/createsatellite.input");
const planets_service_1 = require("../planets/planets.service");
const planet_model_1 = require("../planets/models/planet.model");
let SatellitesResolver = class SatellitesResolver {
    constructor(SatelliteService, PlanetsService) {
        this.SatelliteService = SatelliteService;
        this.PlanetsService = PlanetsService;
    }
    async findSatellite(slug) {
        return this.SatelliteService.findOne(slug);
    }
    async createSatellite(createSatelliteData) {
        return this.SatelliteService.create(createSatelliteData);
    }
    async deleteSatellite(slug) {
        return this.SatelliteService.delete(slug);
    }
    async planet(Satellite) {
        const { slug } = Satellite;
        return this.PlanetsService.finOneBySatelliteSlug(slug);
    }
};
exports.SatellitesResolver = SatellitesResolver;
__decorate([
    (0, graphql_1.Query)((returns) => satellite_model_1.Satellite),
    __param(0, (0, graphql_1.Args)("slug", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SatellitesResolver.prototype, "findSatellite", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => satellite_model_1.Satellite),
    __param(0, (0, graphql_1.Args)("CreateSatelliteData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createsatellite_input_1.CreateSatelliteInput]),
    __metadata("design:returntype", Promise)
], SatellitesResolver.prototype, "createSatellite", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => satellite_model_1.Satellite),
    __param(0, (0, graphql_1.Args)("slug", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SatellitesResolver.prototype, "deleteSatellite", null);
__decorate([
    (0, graphql_1.ResolveField)(() => planet_model_1.Planet),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [satellite_model_1.Satellite]),
    __metadata("design:returntype", Promise)
], SatellitesResolver.prototype, "planet", null);
exports.SatellitesResolver = SatellitesResolver = __decorate([
    (0, graphql_1.Resolver)(of => satellite_model_1.Satellite),
    __metadata("design:paramtypes", [satellites_service_1.SatellitesService,
        planets_service_1.PlanetsService])
], SatellitesResolver);
//# sourceMappingURL=satellites.resolver.js.map