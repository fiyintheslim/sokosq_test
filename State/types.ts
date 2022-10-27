export type ProductType = {
  name: string;
  price: number;
  amount: number;
};

export type totalVisibleType = {
  totalVisible: boolean;
};

export type initialStateType = {
  products: ProductType[];
  totalVisible: boolean;
};
