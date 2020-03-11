import React from 'react';
import {ITab} from "../TabContainer";
import "./TabHeaders.scss";
import {TabItem} from "../tab-item/TabItem";

export interface TabHeaderProps {
    tabs: ITab[];
    activeTab: ITab;
    onTabSelected: (tab: ITab) => void
}

export function TabHeader({tabs, onTabSelected, activeTab}: TabHeaderProps) {
    return <div className="tab-header">
        {
            tabs.map(tab => <TabItem key={tab.title}
                                     className={tab === activeTab ? "active-tab" : ""}
                                     tab={tab}
                                     onClick={onTabSelected}/>)
        }
    </div>;
}

