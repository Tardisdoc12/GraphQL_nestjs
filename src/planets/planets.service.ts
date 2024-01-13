import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Model, ObjectId, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Planet } from './schemas/planet.schema';
import { CreatePlanetInput } from './inputs/createplanet.input';
import { slugify } from 'src/sluger/sluger.service';
import { UpdatePlanetInput } from './inputs/updateplanet.input';
import { SatellitesService } from 'src/satellites/satellites.service';
import { CreateSatelliteInput } from 'src/satellites/inputs/createsatellite.input';


@Injectable()
export class PlanetsService {

    constructor(@InjectModel(Planet.name) private planetsModel: Model<Planet>,
    @Inject(forwardRef(() => SatellitesService)) private satellitesService : SatellitesService,
    ) {}

    async create(createPlanetDto: CreatePlanetInput): Promise<Planet> {
        createPlanetDto.slug = slugify(createPlanetDto.name);
        const createdPlanet = new this.planetsModel(createPlanetDto);
        return createdPlanet.save();
    }

    async addSatellite(planetId: string, satelliteId: string) {
        try{
            const planet = await this.planetsModel.findById(planetId).exec();
            planet.satellites.push(satelliteId);
            return await planet.save();
        }
        catch(err){
            return err;
        }
    }

    async removeSatellite(planetSlug : string, satelliteId: Types.ObjectId) {
        var planet = await this.planetsModel.findOneAndUpdate(
            {slug:planetSlug},
            { $pull: { satellites: satelliteId } },
            { new: true },
          ).exec();
          return planet;
    }

    async findOne(slug: string) {
        try{
            return await this.planetsModel.findOne({slug: slug}).exec();
        }
        catch(err){
            return err;
        }
    }


    async finOneBySatelliteSlug(slug: string) {
        try{
            const satellite = await this.satellitesService.findOne(slug);
            const id_planet = satellite.planet;
            return (await this.planetsModel.findById(id_planet).exec());
        }
        catch(err){
            return err;
        }
    }

    async findAll() {
        try{
            return await this.planetsModel.find().exec();
        }
        catch(err){
            return err;
        }
    }

    async delete(slug: string) {
        try{
            const planet = this.planetsModel.findOneAndDelete({slug: slug}).exec();
            return planet;
        }
        catch(err){
            return err;
        }
    }

    async update(updatePlanetDto: UpdatePlanetInput) {
        try{
            const planet = this.planetsModel.findOneAndUpdate({slug: updatePlanetDto.slug}, updatePlanetDto).exec();
            return planet;
        }
        catch(err){
            return err;
        }
    }
}

