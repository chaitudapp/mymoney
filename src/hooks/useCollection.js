import {useEffect, useState, useRef} from "react"
import { projectFirestore} from '../firebase/Config'



export const useCollections = (collection, _query,_orderBy) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current
    useEffect(() => {
        var ref = projectFirestore.collection(collection)
 
        if (orderBy) {
            ref = ref.orderBy(...orderBy).limit(5)

        }

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                console.log(doc.id)
                results.push({...doc.data(),id: doc.id})
            })
            setDocuments(results)
            setError(null)
        },(error) => {
            console.log(error)
            setError(error.message)
        })

        return () => unsubscribe()


    },[collection,query,orderBy])

    return {documents, error}
}