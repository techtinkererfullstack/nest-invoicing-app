import { SalesStatus } from '../sales.model';

export class GetSalesFilterDto {
  status: SalesStatus;
  search: string;
}
