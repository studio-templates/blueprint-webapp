import React from 'react';
import styles from './pdofilepic.module.scss'

export interface PdofilepicProps {
    className?: string;
}

export const Pdofilepic: React.FC<PdofilepicProps> = ({ className }) => {
    return <div className={`${styles.root} ${styles.profile}`}>
        <img src="https://cdns-images.dzcdn.net/images/artist/d868d87e47d0597e6ba36d49eadec848/500x500.jpg" className={styles.roundimg} />
        <div className={styles.text}>Mac.M</div></div>;
};