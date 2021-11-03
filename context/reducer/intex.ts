import { MyAction } from "../../utils/interfaces/context/Action";
import { InitialState } from "../../utils/interfaces/context/InitialState";
import { initialState } from "../initialState";
import { sideMenuStateType } from "../types";

const reducer = (state: InitialState = initialState, action: MyAction) => {
  switch (action.type) {
    case sideMenuStateType:
      return {
        ...state,
        sideMenuState: !state.sideMenuState,
      };
    default:
      return state;
  }
};

export default reducer;
