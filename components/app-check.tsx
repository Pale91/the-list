'use client'
import React from "react";

import { activateAppCheck } from '../infrastructure/firebase'

export const AppCheck = ({ onInitialized }: { onInitialized: () => void }) => {
    React.useEffect(() => {
        activateAppCheck();
        onInitialized();
    }, []);

    return <></>;
}