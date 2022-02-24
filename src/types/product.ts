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