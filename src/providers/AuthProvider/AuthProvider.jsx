import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import firebaseApp from '../../firebase/firebase.config';
export const AuthContext = createContext(null);
 const auth = getAuth(firebaseApp);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user by email and password. this funtion pass by authInfo;
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const addNameAndPhoto = (currentUser, name, photo)=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL:photo})
    }
    //login auth funtion;
    const login = (email, password)=>{
        return signInWithEmailAndPassword (auth, email, password);
    }
    //get current user;
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
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

    const authInfo = {
        user,
        createUser,
        addNameAndPhoto,
        login,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;