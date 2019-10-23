import { get as _get } from 'lodash';
import * as types from './types';

const initialState = {
  list: [],
  columns: [],
  roles: [],
  total: 0
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        list: _get(action.data, 'content'),
        total: _get(action.data, 'totalElements')
      };
    case types.GET_EXTENDS_COLUMNS:
      return {
        ...state,
        columns: action.data,
      };
    case types.GET_ROLES_BY_USER_ID:
      return {
        ...state,
        roles: action.data,
      };
    default:
      return state;
  }
};

export const key = 'user';

reducer.reducer = key;

export default reducer;
