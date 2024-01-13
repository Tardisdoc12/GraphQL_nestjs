import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Satellite } from './models/satellite.model';
import { PlanetsService } from 'src/planets/planets.service';
import { slugify } from 'src/sluger/sluger.service';
import { CreateSatelliteInput } from './inputs/createsatellite.input';

@Injectable()
export class SatellitesService {
    constructor(
        @InjectModel('Satellite') private satelliteModel: Model<Satellite>,
        @Inject(forwardRef(() => PlanetsService)) private planetsService : PlanetsService,
    ) {}

    async findOne(slug: string) {
        try{
            return (await this.satelliteModel.findOne({slug: slug}).exec());
        }
        catch(err){
            return err;
        }
    }


    async findAllByPlanetSlug(slug: string) {
        try{
            const planet = await this.planetsService.findOne(slug);
            const satellitesForPlanet = planet.satellites;
            //trouve tous les satellites avec le tableau d'id
            return await this.satelliteModel.find({ _id: { $in: satellitesForPlanet } }).exec();
        }
        catch(err){
            return err;
        }
    }

    async delete(SatelliteSlug: string) {
        try{
            const satellite = await this.satelliteModel.findOne({slug:SatelliteSlug}).exec();
            const { slug } = satellite.planet;
            await this.planetsService.removeSatellite(slug, satellite._id);
            return await this.satelliteModel.deleteOne({slug:SatelliteSlug}).exec();
        }
        catch(err){
            return err;
        }
    }


    async create(createSatelliteDto: CreateSatelliteInput): Promise<Satellite> {
        createSatelliteDto.slug = slugify(createSatelliteDto.name);
        const createdSatellite = new this.satelliteModel(createSatelliteDto);
        const satellite = await createdSatellite.save();
        await this.planetsService.addSatellite(createSatelliteDto.planet, satellite._id.toString());
        return satellite;
    }
}
