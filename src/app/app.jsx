import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import userTable from './app-counter';

import { CorrectContentBar } from './contentbar/contentbar.jsx'
import { SideBar } from './sidebar/sidebar.jsx'

let store = createStore(userTable);

var MainContent = React.createClass({

  render: function() {
    return (
      <div className="col-10 col-offset-1">
        <CorrectContentBar/>
        <SideBar/>
      </div>
    );
  }
});

ReactDOM.render(
  <Provider store={store}>
      <MainContent/>
  </Provider>,
  document.getElementById('root')
);
