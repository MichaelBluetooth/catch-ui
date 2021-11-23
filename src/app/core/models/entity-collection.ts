import { BaseEntity } from './base-entity';

export interface EntityCollection<T extends BaseEntity> {
  results: T[];
}
