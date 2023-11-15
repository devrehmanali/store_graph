import { Injectable } from '@nestjs/common';
import {
  // EntityRepository,
  Repository,
  DeepPartial,
  EntityManager,
  EntityTarget,
} from 'typeorm';

@Injectable()
export class CustomRepository<T> extends Repository<T> {
  constructor(
    entity: EntityTarget<T>,
    private readonly entityManager: EntityManager,
  ) {
    super(entity, entityManager);
  }

  async createAndSave(entity: DeepPartial<T>): Promise<T> {
    const newEntity = this.create(entity);
    return this.save(newEntity);
  }
}
