import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import userTable from './app-counter';

import { CorrectContentBar } from './contentbar/contentbar.jsx'
import { SideBar } from './sidebar/sidebar.jsx'
import { CorrectPersonsTable } from './contentbar/persons-table/personsTable.jsx'

let store = createStore(userTable);

const history = syncHistoryWithStore(browserHistory, store)

var MainContent = React.createClass({

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function() {
    return (
      <div className="col-10 col-offset-1">
        {this.props.children}
        <SideBar/>
      </div>
    );
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainContent}>
        <Route component={CorrectContentBar}>
          <IndexRoute component={CorrectPersonsTable} />
          <Route path="/:userFilter" component={CorrectPersonsTable}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
