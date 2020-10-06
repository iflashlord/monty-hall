import { configureStore } from '@reduxjs/toolkit';
import simulatorReducer from '../features/simulator/simulatorSlice';

export default configureStore({
  reducer: {
    simulator: simulatorReducer,
  },
});
