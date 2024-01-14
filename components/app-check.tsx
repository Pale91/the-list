'use client'
import React from "react";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { app } from '../infrastructure/firebase'

export const AppCheck = ({ onInitialized }: { onInitialized: () => void }) => {
    React.useEffect(() => {
        // Create a ReCaptchaEnterpriseProvider instance using your reCAPTCHA Enterprise
        // site key and pass it to initializeAppCheck().
        const appCheck = initializeAppCheck(app, {
            provider: new ReCaptchaEnterpriseProvider('6LdSZFApAAAAAIHXhOlbLTbNk-frTByqG5d0WigQ'),
            isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
        });

        onInitialized();
    }, []);

    return <></>;
}