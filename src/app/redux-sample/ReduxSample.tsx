import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import {ReduxViewer} from "./ReduxViewer";

export function ReduxSample() {
    return <Provider store={store}>
        <ReduxViewer/>
    </Provider>;
}
