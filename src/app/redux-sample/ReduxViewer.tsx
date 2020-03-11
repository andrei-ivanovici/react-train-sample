import React, {ChangeEvent, Dispatch} from 'react';
import {connect} from "react-redux";
import {GithubUserViewer} from "../github-user-viewer/GithubUserViewer";
import {IUser} from "../../model";
import {AppState} from "./reducers";
import {AppAction} from "./actions/app.actions";
import {updateSearchThunk} from "./thunks/updateSearchDebounced.thunk";
import "./ReduxViewer.scss";
import {ErrorViewer} from "../error-viewer/ErrorViewer";

interface ReduxViewerInputs {
    search: string;
    user?: IUser;
    error: any;

}

interface ReduxViewerOutputs {
    updateSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export  type ReduxViewerProps = ReduxViewerInputs & ReduxViewerOutputs;

export function ReduxViewerComponent({search, updateSearch, user, error}: ReduxViewerProps) {
    return <div>
        <h1>Redux Viewer</h1>
        {error && <ErrorViewer error={error}/>}
        <GithubUserViewer search={search} updateSearch={updateSearch} user={user}/>
    </div>;
}

export function mapStateToProps({user, search, error}: AppState): ReduxViewerInputs {
    return {
        user,
        search,
        error
    };
}

export function mapDispatchToProps(dispatch: Dispatch<AppAction>): ReduxViewerOutputs {
    return {
        updateSearch: (event) => {
            dispatch(updateSearchThunk(event.target.value) as any);
        }
    };
}

export const ReduxViewer = connect(mapStateToProps, mapDispatchToProps)(ReduxViewerComponent);

