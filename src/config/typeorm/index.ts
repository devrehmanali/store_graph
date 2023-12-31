import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { TYPEORM } from '@environments';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options = {
      ...TYPEORM,
      type: 'mongodb',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: true,
      autoLoadEntities: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepConnectionAlive: true,
      logging: true,
    };
    return options;
  }
}
