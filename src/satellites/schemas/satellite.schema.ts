import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Planet } from 'src/planets/schemas/planet.schema';

@Schema()
export class Satellite extends mongoose.Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true,unique:true })
  slug: string;

  @Prop({ default: 0 })
  radius: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Planet'})
  planet: string|Planet;
}

export const SatelliteSchema = SchemaFactory.createForClass(Satellite);