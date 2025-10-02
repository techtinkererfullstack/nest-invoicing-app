import { DataSource, Repository } from 'typeorm';
import { Sale } from './sales.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesRepository extends Repository<Sale> {
  constructor(private dataSource: DataSource) {
    super(Sale, dataSource.createEntityManager());
  }

  // Add your custom methods here, for example:
}
