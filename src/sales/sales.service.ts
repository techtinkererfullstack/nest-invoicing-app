import { Injectable } from '@nestjs/common';
import { Sale, SalesStatus } from './sales.model';
import * as uuid from 'uuid';
import { CreateSalesDto } from './dto/create-sales.dto';
import { GetSalesFilterDto } from './dto/get-sales-filter.dto';

@Injectable()
export class SalesService {
  private sales: Sale[] = [];

  getAllSales(): Sale[] {
    return this.sales;
  }

  getSalesWithFilters(filterDto: GetSalesFilterDto): Sale[] {
    const { status, search } = filterDto;
    let sales = this.getAllSales();
    if (status) {
      sales = sales.filter((sale) => sale.status === status);
    }
    if (search) {
      sales = sales.filter(
        (sale) =>
          sale.status.includes(search) || sale.customerPhone.includes(search),
      );
    }

    return sales;
  }

  getSaleById(id: string): Sale | undefined {
    return this.sales.find((sale) => sale.id === id);
  }

  createSale(createSalesDto: CreateSalesDto): Sale {
    const {
      customerName,
      customerEmail,
      customerPhone,
      productDescription,
      amount,
      quantity,
    } = createSalesDto;

    const sale: Sale = {
      id: uuid.v4(),
      customerName,
      customerEmail,
      customerPhone,
      productDescription,
      amount,
      quantity,
      status: SalesStatus.PENDING,
      orderDate: new Date(),
    };
    this.sales.push(sale);
    return sale;
  }

  updateSaleStatus(id: string, status: SalesStatus): Sale {
    const sale = this.getSaleById(id);
    if (!sale) {
      throw new Error(`Sale with ID ${id} not found`);
    }
    sale.status = status;
    return sale;
  }

  deleteSale(id: string): void {
    const sale = this.getSaleById(id);
    this.sales = this.sales.filter((sale) => sale.id !== id);
  }
}
