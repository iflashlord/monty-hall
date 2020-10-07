import React from 'react';
import { useSelector } from 'react-redux';
import { 
  selectLoading
} from './gatesSlice';
import styles from './Gates.module.css';

export function Gates() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <div className={styles.row}>
         <div className={styles.gate}>
            <strong>{loading ? "?" : "1"}</strong>
         </div>
         <div className={styles.gate}>
            <strong>{loading ? "?" : "2"}</strong>
         </div>
         <div className={styles.gate}>
            <strong>{loading ? "?" : "3"}</strong>
         </div>
      </div>
    </div>
  );
}

export default Gates;