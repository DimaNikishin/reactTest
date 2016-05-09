import React from 'react';
import { connect } from 'react-redux';

var PersonsTable = React.createClass({

  propTypes: {
    userRoles: React.PropTypes.array.isRequired,
    usersData: React.PropTypes.array.isRequired,
    sortedBy: React.PropTypes.object.isRequired
  },

  handleRemoveUser: function(userId){
     this.context.store.dispatch({
       type: 'REMOVE_USER',
       id: userId
     });
  },

  handleUpdateUser: function(userId,key,value){
     this.context.store.dispatch({
       type: 'UPDATE_USER',
       id: userId,
       key: key,
       value: value
     });
  },

  handleSortByRole: function(key){
     this.context.store.dispatch({
       type: 'SORT_USER',
       key: key
     });
  },

  handleReverseSortByRole: function(key){
     this.context.store.dispatch({
       type: 'REVERSE_SORT_USER',
       key: key,
       reverse: true
     });
  },

  render: function() {
    var thNodes = this.props.userRoles.map(function(th) {
      return (
        <th onClick={th.key===this.props.sortedBy.key && !this.props.sortedBy.reverse ? this.handleReverseSortByRole.bind(null,th.key) : this.handleSortByRole.bind(null,th.key)}>{th.title}</th>
      );
    },this);
    var userRecords = this.props.usersData.map(function(user){
      var that = this;
      let index = user.id
      var props = user.roles.map(function(prop){
        return(
          <td className="with-input"><input type="checkbox" checked={prop.value} onChange={this.handleUpdateUser.bind(null,index,prop.key,!prop.value)}/></td>
        );
      },that);

      return (
        <tr key={user.id}>
            <td>{user.name}</td>
            {props}
            <td className="with-input"><span onClick={this.handleRemoveUser.bind(null,user.id)}>X</span></td>
        </tr>
      );
    },this);
    return (
      <div className="user-table">
        <table>
          <thead>
            <tr>
                <th onClick={!this.props.sortedBy.key && !this.props.sortedBy.reverse ? this.handleReverseSortByRole.bind(null,'') : this.handleSortByRole.bind(null,'')}>Name</th>
                {thNodes}
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userRecords}
          </tbody>
        </table>
    </div>
    );
  }
});

PersonsTable.contextTypes = {
   store: React.PropTypes.object
}

const getVisibleUsers = (users, filter) => {
  if(filter){
    return users.filter(function(user){
      for(var i = 0; i < user.roles.length; i++){
        if(user.roles[i].key === filter && user.roles[i].value){
          return true;
        }
      }
    })
  }else{
    return users;
  }
}

const getSortedUsers = (users, sort) => {
  var sortedUsers;
  if(sort.key){
    let roleIndex = users[0].roles.findIndex((role)=>role.key === sort.key)
    const sortFunction = (a, b) => {
      if (a.roles[roleIndex].value > b.roles[roleIndex].value) {
        return -1;
      }
      if (a.roles[roleIndex].value < b.roles[roleIndex].value) {
        return 1;
      }
      return 0;
    }
    sortedUsers = users.sort(sortFunction)
    if(sort.reverse){
      return [...sortedUsers].reverse()
    }else{
      return [...sortedUsers]
    }
  }else{
    const sortFunction = (a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    }
    sortedUsers = users.sort(sortFunction)
    if(sort.reverse){
      return [...sortedUsers].reverse()
    }else{
      return [...sortedUsers]
    }
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    usersData: getSortedUsers(getVisibleUsers(state.userList.users, ownProps.params.userFilter),state.sortUsers),
    userRoles: state.userList.roles,
    sortedBy: state.sortUsers
  }
}

const CorrectPersonsTable = connect(
  mapStateToProps
)(PersonsTable)

export { CorrectPersonsTable }
