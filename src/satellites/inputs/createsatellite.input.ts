import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Planet } from 'src/planets/models/planet.model';

@InputType()
export class CreateSatelliteInput{

  @Field({ description: 'The name of the Satellite' })
  name: string;

  @Field({ nullable: true, description: 'The slug of the satellite' })
  slug?: string;

  @Field(type => Int, { description: 'The distance of the satellite from its center' })
  radius: number;

    @Field({ description: 'The planet the satellite orbits' })
    planet: string;
}