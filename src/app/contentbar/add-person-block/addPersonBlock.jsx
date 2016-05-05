import React from 'react';
import { connect } from 'react-redux';

import { CorrectAddPersonForm } from './add-person-form/addPersonForm.jsx'

var AddPersonBlock = React.createClass({

  render: function() {
    return (
      <div className="add-person-block">
        <h3>Add new person</h3>
        <CorrectAddPersonForm />
      </div>
    );
  }
});

export { AddPersonBlock }
