import React from 'react';
import {TabContainer} from "../tab/TabContainer";
import {GithubUserHooks} from "../hooks-sample/GithubUserHooks";
import {ReduxSample} from "../redux-sample/ReduxSample";
import "./Root.scss";
import {TitleBar} from "../title-bar/TitleBar";

export function Root() {
    return <div>
        <TitleBar/>
        <TabContainer tabs={[
            {
                title: "Hooks",
                content: <GithubUserHooks/>
            },
            {
                title: "Redux",
                content: <ReduxSample/>
            }
        ]}/>
    </div>;
}
