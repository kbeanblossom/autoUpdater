import { PSAT } from './psat';

export interface Directory {
  name: string,
  psat?: PSAT[],
  subDirectory?: Directory[]
  collapsed?: boolean;
  date?: Date;
}
