import * as types from './mutation-types';

import axios from 'axios';

export default {
  async getCutOffTimeList ({commit}) {
    let res = null;

    try {
      if (process.env.NODE_ENV === 'development') {
        res = {
          data: [57600000]
        };
      } else {
        res = await axios.get('/crm-api/apollo-web/hotelInfo/accountantRecord');
      }
    } catch (err) {
      res = await axios.get('/crm-api/apollo-web/query-condition/accountant-time');
      // 按照 1970年01月02日 提供初始结算时间
      res.data = [(res.data + 16) * 3600000];
    } finally {
      commit(types.GET_CUT_OFF_TIME_LIST, res.data);
    }
  }
};
