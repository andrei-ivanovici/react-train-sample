import React, {useState} from 'react';
import styles from "./TabContainer.module.scss";
import {TabHeader} from "./tab-header/TabHeader";

const {root, content} = styles;

export interface ITab {
    title: string;
    content: JSX.Element
}

export interface TabProps {
    tabs: ITab[]
}


export function TabContainer(props: TabProps) {
    const {tabs} = props;

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return <div className={root}>
        <TabHeader tabs={tabs} activeTab={activeTab} onTabSelected={setActiveTab}/>
        <div className={content}>
            {activeTab.content}
        </div>
    </div>;
}
