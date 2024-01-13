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
exports.PlanetsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const planets_service_1 = require("./planets.service");
const planet_model_1 = require("./models/planet.model");
const createplanet_input_1 = require("./inputs/createplanet.input");
const updateplanet_input_1 = require("./inputs/updateplanet.input");
const satellite_model_1 = require("../satellites/models/satellite.model");
const satellites_service_1 = require("../satellites/satellites.service");
let PlanetsResolver = class PlanetsResolver {
    constructor(planetService, satelliteService) {
        this.planetService = planetService;
        this.satelliteService = satelliteService;
    }
    async createPlanet(createPlanetData) {
        return this.planetService.create(createPlanetData);
    }
    async findPlanet(slug) {
        return this.planetService.findOne(slug);
    }
    async findPlanets() {
        return this.planetService.findAll();
    }
    async deletePlanet(slug) {
        return this.planetService.delete(slug);
    }
    async updatePlanet(updatePlanetData) {
        return this.planetService.update(updatePlanetData);
    }
    async satellite(planet) {
        const { slug } = planet;
        return this.satelliteService.findAllByPlanetSlug(slug);
    }
};
exports.PlanetsResolver = PlanetsResolver;
__decorate([
    (0, graphql_1.Mutation)(returns => planet_model_1.Planet),
    __param(0, (0, graphql_1.Args)('CreatePlanetData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createplanet_input_1.CreatePlanetInput]),
    __metadata("design:returntype", Promise)
], PlanetsResolver.prototype, "createPlanet", null);
__decorate([
    (0, graphql_1.Query)(returns => planet_model_1.Planet),
    __param(0, (0, graphql_1.Args)('slug', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlanetsResolver.prototype, "findPlanet", null);
__decorate([
    (0, graphql_1.Query)(returns => [planet_model_1.Planet]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlanetsResolver.prototype, "findPlanets", null);
__decorate([
    (0, graphql_1.Mutation)(returns => planet_model_1.Planet),
    __param(0, (0, graphql_1.Args)('slug', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlanetsResolver.prototype, "deletePlanet", null);
__decorate([
    (0, graphql_1.Mutation)(returns => planet_model_1.Planet),
    __param(0, (0, graphql_1.Args)('UpdatePlanetData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateplanet_input_1.UpdatePlanetInput]),
    __metadata("design:returntype", Promise)
], PlanetsResolver.prototype, "updatePlanet", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [satellite_model_1.Satellite]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [planet_model_1.Planet]),
    __metadata("design:returntype", Promise)
], PlanetsResolver.prototype, "satellite", null);
exports.PlanetsResolver = PlanetsResolver = __decorate([
    (0, graphql_1.Resolver)(of => planet_model_1.Planet),
    __metadata("design:paramtypes", [planets_service_1.PlanetsService,
        satellites_service_1.SatellitesService])
], PlanetsResolver);
//# sourceMappingURL=planets.resolver.js.map