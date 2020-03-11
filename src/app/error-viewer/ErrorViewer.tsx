import React from 'react';
import style from "./ErrorViewer.module.scss";

const {root} = style;

export interface ErrorViewerProps {
    error: any;
}

export function ErrorViewer({error}: ErrorViewerProps) {
    return error && <div className={root}>
        <h3>ERROR</h3>
        <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>;
}
