
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Satellite } from 'src/satellites/models/satellite.model';

@ObjectType()
export class Planet{

  @Field({ description: 'The name of the planet' })
  name: string;

  @Field({ nullable: true, description: 'The slug of the planet' })
  slug: string;

  @Field(type => Int, { description: 'The distance of the planet from the sun' })
  radius: number;

  @Field(type => [Satellite] , { description: 'The satellites of the planet' })
  satellites: [Satellite];
}
