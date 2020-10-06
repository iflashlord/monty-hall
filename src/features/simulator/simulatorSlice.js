import { createSlice } from '@reduxjs/toolkit';

export const simulatorSlice = createSlice({
  name: 'simulator',
  initialState: {
    won: 0,
    lost: 0,
    loading: false,
    is_switch: false,
  },
  reducers: {
    updateBoard: (state, data) => {
      state.won = data.payload.roundWon;
      state.lost = data.payload.roundLost;
      state.loading = false;
    },
    reset: state => {
      state.won = 0;
      state.lost = 0;
    },
    loadingData: (state, is_loading) => {
      state.loading = is_loading;
    },
  },
});

export const { reset, loadingData, updateBoard } = simulatorSlice.actions;
 
export const selectWonCount = state => state.simulator.won;
export const selectLostCount = state => state.simulator.lost;
export const selectLoading = state => state.simulator.loading;

export default simulatorSlice.reducer;
