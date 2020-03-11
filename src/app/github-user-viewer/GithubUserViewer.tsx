import React, {ChangeEvent} from 'react';
import style from "./GithubUserViewer.module.scss";
import {IUser} from "../../model";

const {root} = style;

export interface GithubUserViewerProps {
    search: string;
    updateSearch: (event: ChangeEvent<HTMLInputElement>) => void
    user?: IUser
}

export function GithubUserViewer({search, updateSearch, user}: GithubUserViewerProps) {
    return <div className={root}>
        <div>Github user viewer</div>
        <div>
            <input value={search} onChange={updateSearch}/>
            <div>
                {
                    user ? <pre>{JSON.stringify(user, null, 2)}</pre>
                        : <span>No one selected yet</span>
                }
            </div>
        </div>

    </div>;
}
