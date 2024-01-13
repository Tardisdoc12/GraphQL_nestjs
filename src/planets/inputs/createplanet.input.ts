import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreatePlanetInput{

  @Field({ description: 'The name of the planet' })
  name: string;

  @Field({ nullable: true, description: 'The slug of the planet' })
  slug?: string;

  @Field(type => Int, { description: 'The distance of the planet from the sun' })
  radius: number;
}