import React from 'react';
import { connect } from 'react-redux';

var AdditionalStat = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  getInitialState: function() {

    var userStatistic = this.props.userData.roles.map(function(roles){
      roles.quantity = 0;
      return roles;
    });

    for(var i = 0; i < this.props.userData.users.length; i++){
      for(var z = 0; z < this.props.userData.users[i].roles.length; z++){
        if(this.props.userData.users[i].roles[z].value){
          for(var m = 0; m < userStatistic.length; m++){
            if(userStatistic[m].key === this.props.userData.users[i].roles[z].key){
              userStatistic[m].quantity++
            }
          }
        }
      }
    }

    return {
      userDataStat: userStatistic
    };
  },

  componentWillReceiveProps: function(nextProps){
    let newStatistic = this.state.userDataStat.map(function(role){
      var roleCopy = Object.assign({}, role);
      roleCopy.quantity = 0;
      return roleCopy;
    })

    for(var i = 0; i < nextProps.userData.users.length; i++){
      for(var z = 0; z < nextProps.userData.users[i].roles.length; z++){
        if(nextProps.userData.users[i].roles[z].value){
          for(var m = 0; m < newStatistic.length; m++){
            if(newStatistic[m].key === nextProps.userData.users[i].roles[z].key){
              newStatistic[m].quantity++
            }
          }
        }
      }
    }

  this.setState({userDataStat: newStatistic});

  },

  handleFilterUser: function(filter){
    this.context.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter
    });
  },

  render: function() {
    var propsNodes = this.state.userDataStat.map(function(prop) {
      return (
        <div className="properties"><p onClick={this.handleFilterUser.bind(null,prop.key)}>{prop.title}: {prop.quantity}</p></div>
      );
    }, this);
    return (
      <div className="additional-statistic">
        {propsNodes}
      </div>
    );
  }
});

AdditionalStat.contextTypes = {
   store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    userData: state.userList
  }
}

const CorrectAdditionalStat = connect(
  mapStateToProps
)(AdditionalStat)

export { CorrectAdditionalStat }
