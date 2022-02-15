import React from 'react';
import styles from './new-transaction.module.scss'
import { UserAvatar } from '../user-avatar/user-avatar';
import { ImageAvatar } from '../image-avatar/image-avatar';
import { Icon } from '../icon/Icon';

export interface NewTransactionProps {
    className?: string;
}

export const NewTransaction: React.FC<NewTransactionProps> = ({ className }) => {
    return <div className={styles.root}>
        <h1>New Transaction</h1><div className={styles.userAvatars}>
            <ImageAvatar></ImageAvatar><ImageAvatar></ImageAvatar>
            <ImageAvatar></ImageAvatar>
            <ImageAvatar />
            <ImageAvatar></ImageAvatar>
            <div className={styles.addcontainer}>
                <Icon icon={'add'} className={styles.addicon} iconSize={20}></Icon>Add New</div></div>
        <div className={`${styles.userAvatars} ${styles.bottomline}`}>
            <input className={styles.input} />
            <div className={styles.send}>Send ></div>
        </div>
    </div>;
};