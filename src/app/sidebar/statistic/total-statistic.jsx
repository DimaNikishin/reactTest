import React from 'react';
import { connect } from 'react-redux';

var TotalStat = React.createClass({

  propTypes: {
    userData: React.PropTypes.number.isRequired
  },

  handleFilterUser: function(filter){
    this.context.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter
    });
  },

  render: function() {
    return (
      <div className="total-statistic"><h3 onClick={this.handleFilterUser.bind(null,'')}>Total Persons: {this.props.userData}</h3></div>
    );
  }
});

TotalStat.contextTypes = {
   store: React.PropTypes.object
}


const mapStateToProps = (state) => {
  return {
    userData: state.userList.users.length
  }
}

const CorrectTotalStat = connect(
  mapStateToProps
)(TotalStat)

export { CorrectTotalStat }
