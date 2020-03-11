import {IUser} from "../../../model";
import {AppAction, AppActions, SetUserAction, UpdateSearchAction, SetErrorAction} from "../actions/app.actions";

export interface AppState {
    user?: IUser
    search: string;
    error: any | undefined;
}

export const initialState: AppState = {search: "", user: undefined, error: undefined};

export function mainReducer(state: AppState | undefined, action: AppAction): AppState {
    const internalState = state || initialState;
    switch (action.type) {
        case AppActions.SetUser: {
            const setUser = action as SetUserAction;
            return {
                ...internalState,
                user: setUser.user
            };
        }
        case AppActions.UpdateSearch: {
            const updateSearch = action as UpdateSearchAction;
            return {
                ...internalState,
                search: updateSearch.search
            };
        }
        case AppActions.ClearError: {
            return {
                ...internalState,
                error: undefined
            };

        }
        case AppActions.SetError: {
            const errorAction = action as SetErrorAction;
            return {
                ...internalState,
                error: errorAction.error
            };
        }

    }
    return internalState;

}

