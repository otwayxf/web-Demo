import * as types from './types';

export const getUsers = (search = {}, page = 1, size = 10000000) => async ({ api, dispatch }) => {
  const pageInfo = {
    pageSize: size,
    direction: false,
    sort: true,
    sortCol: 'id'
  };
  const data = await api.post('/auth/user/getUserPageByNameOrAccount', { ...pageInfo, page: page - 1 }, { params: search });
  dispatch({
    type: types.GET_USERS,
    data
  });
};

export const createUser = data => ({ api }) => api.post('/auth/user/createUser', data);

export const updateUser = data => ({ api }) => api.put('/auth/user/updateUser', data);

export const deleteUser = id => ({ api }) => api.delete(`/auth/user/deleteUserByUserId/${id}`);

export const getExtendColumns = () => async ({ api, dispatch }) => {
  const data = await api.get('/auth/user/getUserExtendColumnInfo');
  dispatch({
    type: types.GET_EXTENDS_COLUMNS,
    data
  });
};

export const createExtendColumn = data => ({ api }) => api.post('/auth/user/createUserExtend', data);

export const deleteExtendColumn = name => ({ api }) => api.delete(`/auth/user/deleteUserExtend/${name}`);

export const getRolesByUserId = id => async ({ api, dispatch }) => {
  try {
    const data = await api.get(`/auth/user/getUserRoleListByUserId/${id}`);
    dispatch({
      type: types.GET_ROLES_BY_USER_ID,
      data
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const updateRolesByUserId = data => ({ api }) => api.put('/auth/user/updateUserPrivilege', data);

export const resetPassword = id => ({ api }) => api.get(`/auth/user/resetPassword/${id}`);

export const setPassword = data => ({ api }) => api.put('/auth/user/setPassword/', data);
