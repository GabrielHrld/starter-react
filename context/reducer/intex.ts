import { ActionFromReducer, StateFromReducersMapObject } from "redux";
import { MyAction } from "../../utils/interfaces/context/Action";
import { InitialState } from "../../utils/interfaces/context/InitialState";
import { initialState } from "../initialState";

const reducer = (state: InitialState = initialState, action: MyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
