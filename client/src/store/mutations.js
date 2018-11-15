/* commit Mutation to change state */
import * as types from './mutation-types';

export default {
  [types.GET_CUT_OFF_TIME_LIST] (state, arr) {
    state.cutOffTimeList = arr;
  },
  setCardInfo (state, payload) {
    state.cardInfo = payload;
  }
};
