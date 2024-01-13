import { Module, forwardRef } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsResolver } from './planets.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanetSchema } from './schemas/planet.schema';
import { Planet } from './models/planet.model';
import { SatellitesModule } from 'src/satellites/satellites.module';

@Module({
    exports: [PlanetsService],
    imports: [
        MongooseModule.forFeature([ { name: Planet.name, schema: PlanetSchema }]),
        forwardRef(() => SatellitesModule)
    ],
    providers: [PlanetsService,PlanetsResolver],
})
export class PlanetsModule {}
