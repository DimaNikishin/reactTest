import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

import { ContentBar } from './contentbar/contentbar.jsx'
import { SideBar } from './sidebar/sidebar.jsx'

var MainContent = React.createClass({

  getInitialState: function() {

    var userSetup = {
      name: '',
      props: [],
      id: 0,
      readyToDelete: false
    };

    for(var i = 0; i < this.props.statistic.length; i++){
      userSetup.props.push({key: this.props.statistic[i].key, value: false, title: this.props.statistic[i].title})
    }

    return {
      statistic: this.props.statistic,
      total: 0,
      users: [],
      filteredUsers: [],
      user: userSetup
    };
  },

  componentWillMount: function(){
    this.updateStatistic();
  },

  /**
   * function for filtering users
   * @param  {string} key to filter users by
   * @param  {arrayOfUsers} array with up to date users data
   */
  filterUsers: function(key,users){
    var updatedUsers = users || this.state.users;
    var newStatistic = [...this.state.statistic];
    for (let i = 0; i < newStatistic.length; i++){

      newStatistic = update(newStatistic, {
        [i]: {activeFilter: {$set: false}}
      });

      if(newStatistic[i].key === key){
        newStatistic = update(newStatistic, {
          [i]: {activeFilter: {$set: true}}
        });
      }
    }

    if(key){
      var filteredArray = updatedUsers.filter(function(user){
        for(let i = 0; i < user.props.length; i++){
          if(user.props[i].key === key && user.props[i].value){
            return true;
          }
        }
      })
      this.setState({filteredUsers: filteredArray, statistic: newStatistic});
    } else{
      this.setState({filteredUsers: updatedUsers, statistic: newStatistic});
    }
  },

  /**
   * function for update statistic
   * @param  {arrayOfUsers} array with up to date users data
   */
  updateStatistic: function(users){
    var updatedUsers = users || this.state.users;
    var newStatistic = [...this.state.statistic];
    var activeFilterKey;

    for(let m = 0; m < newStatistic.length; m++){

      newStatistic = update(newStatistic, {
        [m]: {quantity: {$set: 0}}
      });

      if(newStatistic[m].activeFilter){
        activeFilterKey = newStatistic[m].key
      }
    }

    this.filterUsers(activeFilterKey,updatedUsers);

    for(let i = 0; i < updatedUsers.length; i++){
      for(let z = 0; z < updatedUsers[i].props.length; z++){
        if(updatedUsers[i].props[z].value){

          for(let m = 0; m < newStatistic.length; m++){
            if(newStatistic[m].key === updatedUsers[i].props[z].key){
              var nextQuantity = ++newStatistic[m].quantity
              newStatistic = update(newStatistic, {
                [m]: {quantity: {$set: nextQuantity}}
              });
            }
          }

        }
      }
    }
    this.setState({statistic: newStatistic, total: updatedUsers.length});
  },

  /**
   * function for updated user state
   * @param  {number} userId
   * @param  {string} propKey property key name
   */
  updateUser: function(userId,propKey){
    var newUser,
        newUserState = this.state.users.map(function(user){
      if(user.id === userId){
        for(var i = 0; i < user.props.length; i++){
          if(user.props[i].key === propKey){

            let newValue = !user.props[i].value;

            newUser = update(user, {
              props: {[i]: {value: {$set:newValue}}}
            });

            return newUser;
          }
        }
      }else {
        return user;
      }
    });

    this.setState({users: newUserState});
    this.updateStatistic(newUserState);
  },

  /**
   * function for adding user into array with users
   * @param  {Object} object user with user's properties
   */
  addUser: function(user){
    user.id = this.state.users.length ? this.state.users[this.state.users.length-1].id+1 : this.state.user.id;
    var newUserList = update(this.state.users, {$push:[user]})
    this.setState({users: newUserList});
    this.updateStatistic(newUserList);
  },

  /**
   * function for deleting users from array
   * @param  {number} userId of deleting user
   */
  deleteUser: function(userId){
    var newUserList = this.state.users.filter(function(user){
      if(user.id === userId){
        return false;
      } else {
        return true;
      }
    })
    this.setState({users: newUserList});
    this.updateStatistic(newUserList);
  },

  startDeleting: function(userId,isCanceled){
    var newUser;
    var newUserList = this.state.users.map(function(user){
      if(user.id === userId){
        if(isCanceled){
          newUser = update(user, {readyToDelete:{$set:false}})
        } else{
            newUser = update(user, {readyToDelete:{$set:true}})
        }
        return newUser;
      } else {
        newUser = update(user, {readyToDelete:{$set:false}})
        return newUser;
      }
    })
    this.setState({users: newUserList});
    this.updateStatistic(newUserList);
  },

  render: function() {
    return (
      <div className="col-10 col-offset-1">
        <ContentBar statistic={this.state.statistic} filteredUsers={this.state.filteredUsers} onUserFilter={this.filterUsers} onUpdateUser={this.updateUser} user={this.state.user} onAddUser={this.addUser} onDeleteUser={this.deleteUser} onStartDeletingUser={this.startDeleting}/>
        <SideBar statistic={this.state.statistic} total={this.state.total} onUserFilter={this.filterUsers}/>
      </div>
    );
  }
});

ReactDOM.render(
  <MainContent statistic={[{title:"Super power", quantity:0, key:"superpower", activeFilter:false},{title:"Rich", quantity:0, key:"rich", activeFilter:false},{title:"Genius",quantity:0, key:"genius", activeFilter:false}]}/>,
  document.getElementById('root')
);
