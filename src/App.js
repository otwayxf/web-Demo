import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { LocaleProvider } from 'antd';
import createStore from './redux/store';
import Root from './containers/App';

import i18n, { getLocalSettings, getAntLocale } from './i18n';

const history = createBrowserHistory({ basename: '/' });

export default function render(div, initialState = {}) {
  const locale = getLocalSettings();
  i18n(locale).then(() => {
    ReactDOM.render(
      <Provider store={createStore(history, initialState)}>
        <ConnectedRouter history={history}>
          <LocaleProvider locale={getAntLocale(locale)}>
            <Root />
          </LocaleProvider>
        </ConnectedRouter>
      </Provider>,
      div
    );
  });
}
