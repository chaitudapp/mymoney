import React,{ createContext,useReducer,useEffect} from "react";

import {projectAuth} from '../firebase/Config'

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload }
        
        case 'LOGOUT':
            return {...state, user: null}

        case 'AUTH_IS_READY' :
            return {...state , user :action.payload, authIsReady: true}

        default:
            return state
    }
}


export const AuthContextProvider = (props) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
    })

    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged((user) => {
            dispatch({type: 'AUTH_IS_READY',payload: user})
            unsub()
        })

    },[])



    console.log('State: ' ,state)


    return (
        <AuthContext.Provider value = {{ ...state, dispatch }}>
            { props.children }
        </AuthContext.Provider>
    )
} 