import React from 'react';
import { connect } from 'react-redux';

var TotalStat = React.createClass({

  propTypes: {
    userData: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="total-statistic"><h3>Total Persons: {this.props.userData}</h3></div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    userData: state.userList.users.length
  }
}

const CorrectTotalStat = connect(
  mapStateToProps
)(TotalStat)

export { CorrectTotalStat }
