import React from 'react';
import { useSelector } from 'react-redux';
import { 
  wonCount,
  lostCount,
  selectLoading
} from './resultSlice';
import man from '../../assets/man.svg';
import styles from './Result.module.css';

export function Result() {
  const wonCountNum = useSelector(wonCount);
  const lostCountNum = useSelector(lostCount);
  const loading = useSelector(selectLoading);

  return (
    <div className={styles.man}>
    <div>
      <div className={styles.row}>
        <div className={styles.result_board}>
          <span className={`${styles.value_result} ${styles.car}`}>
            <sup>Car</sup>
            <strong>{loading ? "?" : wonCountNum}</strong>
            </span>
          <span className={`${styles.value_result} ${styles.goat}`}>
            <sup>Goat</sup>
            <strong>{loading ? "?" : lostCountNum}</strong>
          </span>
        </div>
      </div>
    </div>
      <img src={man} alt="Conductor" />
    </div>
  );
}

export default Result;
