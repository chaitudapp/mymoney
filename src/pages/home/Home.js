import styles from './Home.module.css'
import { useCollections } from '../../hooks/useCollection'
import TransactionList from './TransactionList.js'
import React from 'react'
import TransactionForm from './TransactionForm'
import {UseAuthContext} from '../../hooks/UseAuthContext' 
const  Home = ()  => {
    const {user} = UseAuthContext()
    const {documents, error} = useCollections('transactions',
    ["uid","==",user.uid],
    ["createdAt","desc"])


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {error && <p>{error}</p>}
                {documents && <TransactionList transactions={documents}/>}
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid = {user.uid}/>
            </div>

        </div>
    )
}

export default Home

