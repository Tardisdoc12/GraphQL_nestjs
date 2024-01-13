import { Satellite } from 'src/satellites/models/satellite.model';
export declare class Planet {
    name: string;
    slug: string;
    radius: number;
    satellites: [Satellite];
}
