import React from 'react'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore'

const TransactionList = ({transactions}) => {
    const {deleteDocument} = useFirestore('transactions')

    return (
        <ul className={styles.transactions}>

            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>${transaction.amount}</p>
                    <button onClick={() => deleteDocument(transaction.id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TransactionList
