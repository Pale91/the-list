'use client'
import React from "react";
import { AppCheck } from "../components/app-check";
import { ListItemCounter } from "../components/list-item-counter";

export const MainContent = () => {
    const [appcheckInitialized, setAppcheckInitialized] = React.useState(false);

    return <>
        <AppCheck onInitialized={() => setAppcheckInitialized(true)} />
        {appcheckInitialized && <ListItemCounter />}
    </>
} 