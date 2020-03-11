import React from 'react';
import {ITab} from "../TabContainer";
import "./TabItem.scss";

export interface TabItemProps {
    tab: ITab;
    onClick: (selectedTab: ITab) => void
    className?: string;
}

export function TabItem({tab, className, onClick}: TabItemProps) {
    const clazz = [className, "TabItem"].filter(clazz => !!clazz).join(" ");
    return <div className={clazz} onClick={() => onClick(tab)}>
        {tab.title}
    </div>;
}
