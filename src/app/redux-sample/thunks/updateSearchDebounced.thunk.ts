import {updateSearch} from "../actions/app.action-creators";
import {Dispatch} from "react";
import {AppAction} from "../actions/app.actions";
import {loadUserThunk} from "./loadUser.thunk";
import {debounce} from "../../../utils/debounce";

export function updateSearchThunk(search: string) {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch(updateSearch(search));
        if (search) {
            debounce(() => {
                dispatch(loadUserThunk(search) as any);
            }, 500);
        }
    };
}
