import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const  AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const loginWithEmail = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubScribe =  onAuthStateChanged(auth,currentUser =>{
            console.log()
            setUser(currentUser);
        })
        return unsubScribe();
    },[])

    const authinfo = {user,loading, createUser,loginWithEmail}
    return (
        <AuthContext.Provider value={authinfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;