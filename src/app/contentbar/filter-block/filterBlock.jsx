import React from 'react';
import { connect } from 'react-redux';

var FilterBlock = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  render: function() {
    var filterNodes = this.props.userData.roles.map(function(filter) {
      return (
        <span>{filter.title}</span>
      );
    },this);
    return (
      <div className="filter-block">
        {filterNodes}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    userData: state.userList
  }
}

const CorrectFilterBlock = connect(
  mapStateToProps
)(FilterBlock)

export { CorrectFilterBlock }
