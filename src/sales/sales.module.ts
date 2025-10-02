import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesRepository } from './sales.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SalesRepository])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
