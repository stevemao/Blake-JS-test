// styles
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store';
import App from './containers/App';
import { fetchQuestionsIfNeeded } from './actions';

const store = configureStore();

class Index extends React.Component {
  onEnter (state) {
    let page = state.params.page;
    if (!page) {
      page = 1;
    }
    store.dispatch(fetchQuestionsIfNeeded(page));
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/(:page)" component={App} onEnter={this.onEnter} />
        </Router>
      </Provider>
    );
  }
}

render(
  <Index />,
  document.getElementById('app')
);
