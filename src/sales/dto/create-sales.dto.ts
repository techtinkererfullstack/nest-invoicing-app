import { IsNotEmpty } from 'class-validator';

export class CreateSalesDto {
  @IsNotEmpty()
  customerName: string;

  @IsNotEmpty()
  customerEmail: string;

  @IsNotEmpty()
  customerPhone: string;

  @IsNotEmpty()
  productDescription: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  quantity: number;
}
