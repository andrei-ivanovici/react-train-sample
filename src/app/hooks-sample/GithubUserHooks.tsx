import React, {useState, ChangeEvent} from 'react';
import axios from "axios";
import {GithubUserViewer} from "../github-user-viewer/GithubUserViewer";
import {useDebounce} from "../../hooks/useDebounce";
import {ErrorViewer} from "../error-viewer/ErrorViewer";

function useUserViewer() {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState();
    const [error, serError] = useState();

    useDebounce(() => {
        if (search) {
            axios.get(`https://api.github.com/users/${search}`)
                .then(result => {
                    setUser(result.data);
                    serError(undefined);
                }).catch(serError);
        }
    }, 500, [search]);

    return {
        updateSearch: (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value),
        search,
        error,
        user,
    };
}

export function GithubUserHooks() {
    const {user, search, error, updateSearch} = useUserViewer();
    return <div>
        <h1>Hooks viewer</h1>
        <ErrorViewer error={error}/>
        <GithubUserViewer search={search} updateSearch={updateSearch} user={user}/>
    </div>;
}
