import axios from "axios";
import {IUser} from "../../../model";
import {setUser, setError, clearError} from "../actions/app.action-creators";
import {Dispatch} from "react";
import {AppAction} from "../actions/app.actions";

export function loadUserThunk(user: string) {
    return (dispatch: Dispatch<AppAction>) => {
        axios.get<IUser>(`https://api.github.com/users/${user}`)
            .then(result => {
                dispatch(setUser(result.data));
                dispatch(clearError());
            })
            .catch(err => {
                dispatch(setError(err));
            });
    };
}
