"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatellitesModule = void 0;
const common_1 = require("@nestjs/common");
const satellites_resolver_1 = require("./satellites.resolver");
const satellites_service_1 = require("./satellites.service");
const satellite_schema_1 = require("./schemas/satellite.schema");
const mongoose_1 = require("@nestjs/mongoose");
const planets_module_1 = require("../planets/planets.module");
let SatellitesModule = class SatellitesModule {
};
exports.SatellitesModule = SatellitesModule;
exports.SatellitesModule = SatellitesModule = __decorate([
    (0, common_1.Module)({
        exports: [satellites_service_1.SatellitesService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: satellite_schema_1.Satellite.name, schema: satellite_schema_1.SatelliteSchema }]),
            (0, common_1.forwardRef)(() => planets_module_1.PlanetsModule)
        ],
        providers: [satellites_resolver_1.SatellitesResolver, satellites_service_1.SatellitesService]
    })
], SatellitesModule);
//# sourceMappingURL=satellites.module.js.map