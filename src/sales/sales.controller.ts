import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import type { Sale, SalesStatus } from './sales.model';
import { SalesService } from './sales.service';
import { CreateSalesDto } from './dto/create-sales.dto';
import { GetSalesFilterDto } from './dto/get-sales-filter.dto';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Get()
  //   getAllSales(): Sale[] {
  //     return this.salesService.getAllSales();
  //   }
  getSales(@Query() filterDto: GetSalesFilterDto): Sale[] {
    if (Object.keys(filterDto).length) {
      return this.salesService.getSalesWithFilters(filterDto);
    } else {
      return this.salesService.getAllSales();
    }
  }

  @Get('/:id')
  getSaleById(@Param('id') id: string): Sale {
    const sale = this.salesService.getSaleById(id);

    if (!sale) {
      throw new NotFoundException(`Sale with ID "${id}" not found.`);
    }
    return sale;
  }

  @Post()
  createSale(@Body() CreateSalesDto: CreateSalesDto): Sale {
    return this.salesService.createSale(CreateSalesDto);
  }

  @Patch('/:id/status')
  updateSaleStatus(
    @Param('id') id: string,
    @Body('status') status: SalesStatus,
  ): Sale {
    return this.salesService.updateSaleStatus(id, status);
  }

  @Delete('/:id')
  deleteSale(@Param('id') id: string): void {
    this.salesService.deleteSale(id);
  }
}
