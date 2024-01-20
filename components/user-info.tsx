import { UserInfo, signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { AppUserInfo, useUser } from '../providers/auth-provider';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { auth, facebookProvider, googleProvider } from '../infrastructure/firebase';

export const LoginInfo = () => {
    const user: AppUserInfo | undefined = useUser();

    if (user === undefined) {
        return (<div>
            <GoogleLoginButton onClick={() => {
                signInWithPopup(auth, googleProvider)
            }} />
            <FacebookLoginButton onClick={() => {
                signInWithPopup(auth, facebookProvider)
            }} />
        </div>);
    }

    return <div>
        {user.displayName} ({user.isAdmin ? "Admin" : "User"})
        <button onClick={() => signOut(auth)}>Logout</button>
    </div>
}