import { createSlice } from '@reduxjs/toolkit';

import initial from './initial';

const initialState = initial.tournament;

const tournament = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTournamentData: (state, { payload }) => ({
      ...payload,
      channel: { online: true },
    }),
    updateTournamentData: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateTournamentChannelState: (state, { payload }) => {
      state.channel.online = payload;
    },
    setTournamentPlayers: (state, { payload }) => {
      state.players = payload;
    },
    clearTournamentPlayers: state => {
      state.players = [];
    },
    setTournamentPlayersPageNumber: (state, { payload }) => {
      state.playersPageNumber = payload;
    },
  },
});

const { actions, reducer } = tournament;

export { actions };
export default reducer;
