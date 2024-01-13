import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TasksModule } from "./tasks/tasks.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { PlanetsModule } from "./planets/planets.module";
import { MongooseModule } from "@nestjs/mongoose";
import { SatellitesService } from './satellites/satellites.service';
import { SatellitesModule } from './satellites/satellites.module';

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PlanetsModule,
    SatellitesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
