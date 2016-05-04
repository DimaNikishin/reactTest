import React from 'react';

import { AddPersonBlock } from './add-person-block/addPersonBlock.jsx'
import { PersonsTable } from './persons-table/personsTable.jsx'
import { FilterBlock } from './filter-block/filterBlock.jsx'

var ContentBar = React.createClass({

  propTypes: {
    statistic: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filteredUsers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onUserFilter: React.PropTypes.func.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired,
    onAddUser: React.PropTypes.func.isRequired,
    onDeleteUser: React.PropTypes.func.isRequired,
    onStartDeletingUser: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div className="col-9 main-content">
        <AddPersonBlock user={this.props.user} onAddUser={this.props.onAddUser}/>
        <PersonsTable statistic={this.props.statistic} filteredUsers={this.props.filteredUsers} onUpdateUser={this.props.onUpdateUser} onDeleteUser={this.props.onDeleteUser} onStartDeletingUser={this.props.onStartDeletingUser}/>
        <FilterBlock statistic={this.props.statistic} onUserFilter={this.props.onUserFilter}/>
      </div>
    );
  }
});

export { ContentBar }
