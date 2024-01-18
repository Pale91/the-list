'use client'
import React from "react";
import { AppCheck } from "../components/app-check";
import { ListItemCounter } from "../components/list-item-counter";
import { AuthProvider } from "../providers/auth-provider";
import { LoginInfo } from "../components/user-info";

export const MainContent = () => {
    const [appcheckInitialized, setAppcheckInitialized] = React.useState(false);

    return <AuthProvider>
        <AppCheck onInitialized={() => setAppcheckInitialized(true)} />
        {appcheckInitialized &&
            <>
                <LoginInfo />
                <ListItemCounter />
            </>}
    </AuthProvider>
} 