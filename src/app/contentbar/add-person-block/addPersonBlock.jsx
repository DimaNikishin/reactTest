import React from 'react';

import { AddPersonForm } from './add-person-form/addPersonForm.jsx'

var AddPersonBlock = React.createClass({

  propTypes: {
    user: React.PropTypes.object.isRequired,
    onAddUser: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div className="add-person-block">
        <h3>Add new person</h3>
        <AddPersonForm user={this.props.user} onAddUser={this.props.onAddUser}/>
      </div>
    );
  }
});

export { AddPersonBlock }
