import { Field, InputType} from '@nestjs/graphql';

@InputType()
export class UpdatePlanetInput{
  @Field({ description: 'The name of the planet' })
  name?: string;
  
  @Field({ nullable: true, description: 'The slug of the planet' })
  slug: string;
  @Field({ nullable: true, description: 'The distance of the planet from the sun' })
  radius?: number;
}