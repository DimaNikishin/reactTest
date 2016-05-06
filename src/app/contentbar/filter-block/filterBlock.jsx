import React from 'react';
import { connect } from 'react-redux';

var FilterBlock = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired,
    activeFilter: React.PropTypes.string.isRequired
  },

  handleFilterUser: function(filter){
    this.context.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter
    });
  },

  render: function() {
    var filterNodes = this.props.userData.roles.map(function(filter) {
      return (
        <span onClick={this.handleFilterUser.bind(null,filter.key)} className={filter.key===this.props.activeFilter ? "active" : "" }>{filter.title}</span>
      );
    },this);
    return (
      <div className="filter-block">
        {filterNodes}
      </div>
    );
  }
});

FilterBlock.contextTypes = {
   store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    userData: state.userList,
    activeFilter: state.filterUsers
  }
}

const CorrectFilterBlock = connect(
  mapStateToProps
)(FilterBlock)

export { CorrectFilterBlock }
