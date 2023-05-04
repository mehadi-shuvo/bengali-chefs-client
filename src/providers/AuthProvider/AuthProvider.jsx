import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import firebaseApp from '../../firebase/firebase.config';
export const AuthContext = createContext(null);
 const auth = getAuth(firebaseApp);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user by email and password. this funtion pass by authInfo;
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const addNameAndPhoto = (currentUser, name, photo)=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL:photo})
    }
    //login auth funtion;
    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password);
    }
    //get current user;
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setLoading(false)
            setUser(loggedUser);
        })

        return ()=>{
            unsubscribe();
        }
    },[]);
    // log out user;
    const logOut = ()=>{
        return signOut(auth);
    }
    // login with google
    const LoginGoogle =(GoogleProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }
    // login with gitHub;
    const loginGitHub = (gitHubProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        addNameAndPhoto,
        login,
        LoginGoogle,
        loginGitHub,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;