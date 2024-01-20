import React, { useContext } from 'react';
import { IdTokenResult, UserInfo, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../infrastructure/firebase';

export interface AppUserInfo extends UserInfo {
    isAdmin?: boolean;
}

const AuthContext = React.createContext<AppUserInfo | undefined>(undefined);

export const useUser = (): AppUserInfo | undefined => useContext(AuthContext) ?? undefined;

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = (props: React.PropsWithChildren<{}>) => {
    const [authInfo, setAuthInfo] = React.useState<AppUserInfo>(undefined);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            (user: UserInfo) => {
                if (user) {
                    auth.currentUser
                        .getIdTokenResult()
                        .then((idTokenResult: IdTokenResult) => setAuthInfo({
                            ...user,
                            isAdmin: !!idTokenResult.claims.admin

                        }))
                }
                else {
                    setAuthInfo(undefined)
                }
            });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={authInfo}>{props.children}</AuthContext.Provider>
}