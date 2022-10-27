import { ProductType } from "./types";
import { initialStateType } from "./types";
import {
  productReducer,
  productReducerActions,
} from "./reducers/productReducer";
import {
  totalVisibleReducer,
  totalVisibleActions,
} from "./reducers/totalReducer";

type actionType = productReducerActions | totalVisibleActions;

export const combinedReducer = (
  { products, totalVisible }: initialStateType,
  actions: any
) => {
  return {
    products: productReducer(products, actions),
    totalVisible: totalVisibleReducer(totalVisible, actions),
  };
};
