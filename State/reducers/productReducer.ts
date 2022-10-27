import { ProductType } from "../types";

export enum ProductActionTypes {
  delete = "DELETE",
  increase = "INCREASE",
  decrease = "DECREASE",
}

interface deleteActionType {
  type: ProductActionTypes.delete;
  payload: number;
}

interface increaseActionType {
  type: ProductActionTypes.increase;
  payload: number;
}

interface decreaseActionType {
  type: ProductActionTypes.decrease;
  payload: number;
}

export type productReducerActions =
  | deleteActionType
  | increaseActionType
  | decreaseActionType;

export const productReducer = (
  state: ProductType[],
  action: productReducerActions
) => {
  switch (action.type) {
    case ProductActionTypes.delete:
      return state.filter((product, index) => action.payload !== index);
    case ProductActionTypes.increase:
      return state.map((product, index) => {
        if (index === action.payload) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });
    case ProductActionTypes.decrease:
      return state.map((product, index) => {
        if (index === action.payload && product.amount > 0) {
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      });
    default:
      return state;
  }
};
