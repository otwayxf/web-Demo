import { createSelector } from 'reselect';
import { omit } from 'lodash';
import { key } from '.';

export const totalSelector = state => state[key].total || 0;

export const listSelector = state => state[key].list || [];

export const roleSelector = state => state[key].roles || [];

export const columnsSelector = state => state[key].columns || [];

export const userListSelector = createSelector(listSelector, item => userSelector(item));


// 新增一个用户的select主要是为了把模块权限从sysModuleDTO中抽离出来
const userSelector = item => {
  const userList = [...item];
  userList.forEach((value, index) => {
    if (value.sysModuleDTO) {
      userList[index].munuArr = [value.sysModuleDTO.parentId, value.sysModuleDTO.id]; 
    }
  });
  return userList || [];
};

// export const userRoleKeysSelector = createSelector(roleSelector, list => list.map(r => `${r.id}`));
export const userRoleKeysSelector = createSelector(roleSelector, list => list.map(r => r.id));
