import {Action} from "redux";
import {IUser} from "../../../model";

export enum AppActions {
    SetError = "APP-SET_ERROR",
    SetUser = "APP-SET_USER",
    UpdateSearch = "APP-UPDATE_SEARCH",
    ClearError = "APP-CLEAR_ERROR"
}

export interface AppAction extends Action<string> {
    type: AppActions
}

export interface SetErrorAction {
    type: AppActions.SetError;
    error: string;
}

export interface ClearErrorAction {
    type: AppActions.ClearError;
}

export interface SetUserAction {
    type: AppActions.SetUser;
    user: IUser;
}

export interface UpdateSearchAction {
    type: AppActions.UpdateSearch;
    search: string;
}
