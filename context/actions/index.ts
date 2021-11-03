import { sideMenuStateType } from "../types";

type ActionCreate<TP> = (p: TP) => { type: string; payload: TP };

export const handleSideMenuAction: ActionCreate<boolean> = (payload) => ({
  type: sideMenuStateType,
  payload,
});
