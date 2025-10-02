import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalesStatus } from './sales.model';

@Entity()
export class Sale extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  customerName: string;

  @Column()
  customerEmail: string;

  @Column()
  customerPhone: string;

  @Column()
  productDescription: string;

  @Column()
  amount: number;

  @Column()
  quantity: number;

  @Column()
  status: SalesStatus;

  @Column()
  orderDate: Date;
}
