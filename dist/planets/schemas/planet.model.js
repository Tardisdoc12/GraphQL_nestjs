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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
const graphql_1 = require("@nestjs/graphql");
let Planet = class Planet {
};
exports.Planet = Planet;
__decorate([
    (0, graphql_1.Field)({ description: 'The name of the planet' }),
    __metadata("design:type", String)
], Planet.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'The slug of the planet' }),
    __metadata("design:type", String)
], Planet.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int, { description: 'The distance of the planet from the sun' }),
    __metadata("design:type", Number)
], Planet.prototype, "radius", void 0);
exports.Planet = Planet = __decorate([
    (0, graphql_1.ObjectType)()
], Planet);
//# sourceMappingURL=planet.model.js.map