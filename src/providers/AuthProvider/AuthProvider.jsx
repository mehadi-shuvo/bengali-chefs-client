import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import firebaseApp from '../../firebase/firebase.config';
export const AuthContext = createContext(null);
 const auth = getAuth(firebaseApp);

const AuthProvider = ({children}) => {
    const user = 'hello';

    // create user by email and password. this funtion pass by authInfo;
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const addNameAndPhoto = (currentUser, name, photo)=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL:photo})
    }
    const authInfo = {
        user,
        createUser,
        addNameAndPhoto,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;