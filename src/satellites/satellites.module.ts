import { Module, forwardRef } from '@nestjs/common';
import { SatellitesResolver } from './satellites.resolver';
import { SatellitesService } from './satellites.service';
import { Satellite, SatelliteSchema } from './schemas/satellite.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanetsModule } from 'src/planets/planets.module';

@Module({
  exports: [SatellitesService],
  imports: [
    MongooseModule.forFeature([ { name: Satellite.name, schema: SatelliteSchema }]),
    forwardRef(() => PlanetsModule)
  ],
  providers: [SatellitesResolver,SatellitesService]
})
export class SatellitesModule {}
