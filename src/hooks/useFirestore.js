import {useReducer, useEffect, useState} from 'react'

import {projectFirestore, timestamp} from '../firebase/Config'

let initialState = {
    document: null,
    isPending: false,
    error:null,
    success: null
}



const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING' :
            return {
            isPending: true, document: null,success: false, error: null}
        case 'ADDED_DOCUMENT':
            return {...state, isPending: false, document: action.payload, success: true, error: null}
        case 'ERROR':
            return {
                isPending:false, document: null, success: false, error: action.payload
            }
        case 'DELETED_DOCUMENT':
            return{
                isPending: false,
                document:null,
                success:true,
                error: null
            }
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = projectFirestore.collection(collection)

    const dispatchIfNot = (action) => {
        if (!isCancelled) {
            dispatch(action)
        }
    }
    

    const firestore = async (doc) => {
        dispatch( {
            type:'IS_PENDING'
        })


        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({...doc, createdAt})
            dispatchIfNot({type: 'ADDED_DOCUMENT', payload: addedDocument})
        }catch(err){
            dispatchIfNot({type:'ERROR', payload: err.message})
        }
        
    }


    const deleteDocument = async (id)  => {

        dispatch({type: 'IS_PENDING'})
        try {
            const deletedDocument =  ref.doc(id).delete()
            dispatchIfNot({type:'DELETED_DOCUMENT'})
        }
        catch(err){
            dispatchIfNot({type:'ERROR',payload: err.message})

        }

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    },[])

    return { response, deleteDocument, firestore }

}