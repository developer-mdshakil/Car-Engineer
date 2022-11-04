import React, { useEffect } from 'react';
import { 
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut, 
    updateProfile
    } from 'firebase/auth';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';

//create a authcontext here
export const AuthContext = createContext();

//create a auth with app
const auth = getAuth(app);

const AuthProvider = ( { children }) => {
    //store here user inforamtion 
    const [user, setUser] = useState(null);

    //if loadding in site show loadding state here
    const [loading, setLoading] = useState(true);

    //declare a function with create user here
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signinUser here
    const LogInUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update user profile here with email
    const userProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //user logout here
    const LogOutUser = () => {
        return signOut(auth)
    }

    //hold user information and check user here
    useEffect( ()=> {
         const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        })
        return ()=> {
            return unsubscribe();
        }
    },[])
    //store share data all components here
    const authInfo = {
        user,
        createUser,
        LogInUser,
        userProfile,
        LogOutUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;