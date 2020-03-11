import {UpdateSearchAction, AppActions, SetUserAction, SetErrorAction, ClearErrorAction} from "./app.actions";
import {IUser} from "../../../model";

export function updateSearch(search: string): UpdateSearchAction {
    return {
        type: AppActions.UpdateSearch,
        search
    };

}

export function setUser(user: IUser): SetUserAction {
    return {
        type: AppActions.SetUser,
        user
    };
}


export function clearError(): ClearErrorAction {
    return {
        type: AppActions.ClearError
    };
}

export function setError(error: any): SetErrorAction {
    return {
        error,
        type: AppActions.SetError
    };
}
