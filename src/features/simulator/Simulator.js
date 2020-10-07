import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadingData,
  updateBoard,
  reset,
  selectLoading,
} from './simulatorSlice';
import styles from './Simulator.module.css';
import axios from "axios";
import {mainServer, simulatorUrls} from '../../app/urls';

export function Simulator() {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();
  const [numberSimulate, setNumberSimulate] = useState('100');
  const [decideSimulate, setDecideSimulate] = useState('change');

  const calculateServer = () => {
    const requestObject = {
      "isSwitchSelected": decideSimulate === "change",
      "numbersOfRound": numberSimulate
    };
    dispatch(loadingData(true));
    
    axios
    .post(
        `${mainServer}${simulatorUrls.simulate}`,
        requestObject
    )
    .then(res => {
        return res.data;
    })
    .then(result => {
        console.log(result)
        dispatch(updateBoard(result));
    });
  }
  return (
    <div className={styles.main}>
      <div className={styles.row}>

      <div className={styles.form}>
        <input
            className={styles.textbox}
            aria-label="Set simulate number"
            value={numberSimulate}
            type="number"
            min="10" max="99999"
            data-testid="simulator-number"
            disabled={loading}
            autoFocus={true}
            onChange={e => setNumberSimulate(e.target.value)}
          />
  
        <div 
          onChange={e => setDecideSimulate(e.target.value)} 
          className={styles.group}
        >
          <label className={styles.decision}>Stick
            <input type="radio" value="stick" name="decide" data-testid="input-radio-stick" defaultChecked={decideSimulate === 'stick'} htmlFor="decide1"/>
            <span className={styles.radio}></span>
          </label> 
          
          <label className={styles.decision}>Change
            <input type="radio" value="change" name="decide" data-testid="input-radio-change" defaultChecked={decideSimulate === 'change'} htmlFor="decide2"/> 
            <span className={styles.radio}></span>
          </label>
        </div>

          <button
            className={styles.buttonSimulate}
            aria-label="Simulate"
            disabled={loading}
            onClick={() => calculateServer()}
          >
            {loading ? "Loading..." : "Simulate"}
          </button>
          
          <button
            className={styles.buttonReset}
            aria-label="Reset"
            disabled={loading}
            onClick={() => {
              dispatch(reset());
              setNumberSimulate(100);
              setDecideSimulate('change');
            }}
          >
            Reset
          </button>
        </div>
 
      </div>
 
    </div>
  );
}

export default Simulator;