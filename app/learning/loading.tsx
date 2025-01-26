import React from 'react';
import styles from '../styles/Loading.module.css';

function Loading() {
    return (
        <div className={styles['loading-container']}>
            <div className={styles['loading-text']}>
                Loading...
            </div>
        </div>
    );
}

export default Loading;
