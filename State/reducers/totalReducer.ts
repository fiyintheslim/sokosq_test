import { totalVisibleType } from "../types";

export enum totalVisibleActions {
  change = "CHANGE",
}

export const totalVisibleReducer = (
  state: boolean,
  actions: { type: totalVisibleActions.change }
) => {
  switch (actions.type) {
    case totalVisibleActions.change:
      return !state;
    default:
      return state;
  }
};
