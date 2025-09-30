export interface Sale {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productDescription: string;
  amount: number;
  quantity: number;
  status: SalesStatus;
  orderDate: Date;
}

export enum SalesStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}
