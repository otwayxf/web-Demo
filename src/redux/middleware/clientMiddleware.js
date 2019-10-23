/*
 * @Author: Otway
 * @Date: 2019-01-09 11:16:08
 * @LastEditors: Otway
 * @LastEditTime: 2019-08-15 10:42:18
 * @copyright: h-visions
 */
const clientMiddleware = api => ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action({ api, dispatch, getState });
  }

  return next(action);
};

export default clientMiddleware;
