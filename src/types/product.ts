export type ProductType = {
  id: number;
  name: string;
  amount: string
};

export type ProductCreated = {
  item: {
    id: number;
    name: string;
    amount: string
  }
};

export type OrderCreated = {
  order: {
    userId: number;
    products: number[];
  }
};

export type ReceivedOrder = {
  id: number;
  userId: number;
  products: number[];
};