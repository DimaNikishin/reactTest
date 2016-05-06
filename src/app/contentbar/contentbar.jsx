import React from 'react';
import { connect } from 'react-redux';

import { AddPersonBlock } from './add-person-block/addPersonBlock.jsx'
import { CorrectPersonsTable } from './persons-table/personsTable.jsx'
import { CorrectFilterBlock } from './filter-block/filterBlock.jsx'

var ContentBar = React.createClass({

  propTypes: {
    usersData: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      <div className={this.props.usersData.length>4 ? "col-9 main-content bigList" : "col-9 main-content" }>
        <AddPersonBlock/>
        <CorrectPersonsTable/>
        <CorrectFilterBlock/>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    usersData: state.userList.users
  }
}

const CorrectContentBar = connect(
  mapStateToProps
)(ContentBar)

export { CorrectContentBar }
