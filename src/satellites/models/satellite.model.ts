import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Planet } from 'src/planets/models/planet.model';

@ObjectType()
export class Satellite{

  @Field({ description: 'The name of the satellite' })
  name: string;

  @Field({ nullable: true, description: 'The slug of the planet' })
  slug?: string;

  @Field(type => Int, { description: 'The distance of the satellite from its center' })
  radius: number;

  @Field( type => Planet , {description: 'The planet the satellite orbits' })
  planet: Planet;
}