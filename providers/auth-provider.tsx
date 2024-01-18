import React, { useContext } from 'react';
import { UserInfo, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../infrastructure/firebase';

interface AuthInfo {
    user?: UserInfo
}

const AuthContext = React.createContext<AuthInfo>({});

export const useUser = (): UserInfo | undefined => useContext(AuthContext).user ?? undefined;

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = (props: React.PropsWithChildren<{}>) => {
    const [authInfo, setAuthInfo] = React.useState<AuthInfo>({});

    React.useEffect(() => {
        onAuthStateChanged(auth, (user: UserInfo) => setAuthInfo({ user }))
    }, []);

    return <AuthContext.Provider value={authInfo}>{props.children}</AuthContext.Provider>
}