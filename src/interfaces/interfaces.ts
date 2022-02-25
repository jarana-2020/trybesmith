export interface User extends NewUser {
  id: number
}
export interface NewUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface Product extends NewProduct {
  id: number;
  orderId: number | null;
}

export interface NewProduct {
  name: string;
  amount: string;
}

export interface Order {
  id: number;
  productId: number;
  userId: number;
}

export interface NewOrder extends OrderProducts {
  id?: number;
  user: number;
  
}

export interface OrderProducts {
  products: number[];
}