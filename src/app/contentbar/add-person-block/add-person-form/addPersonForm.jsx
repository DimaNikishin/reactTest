import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';

var AddPersonForm = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  getInitialState: function() {

    var userRoles = this.props.userData.roles.map(function(roles){
      roles.value = false;
      return roles;
    });

    return {
      userRoles: userRoles,
      userName: ''
    };
  },

  handleCheckBoxChange: function(checkBoxKey,e) {
    let objIndex = this.state.userRoles.findIndex((obj) => obj.key === checkBoxKey)
    let newRoles = update(this.state.userRoles, {[objIndex]:{value:{$set:e.target.checked}}})
    this.setState({userRoles: newRoles});
  },

  handleNameChange: function(e) {
    this.setState({userName: e.target.value});
  },

  handleAddUser: function(e){
     e.preventDefault();
     let userValidRoles = this.state.userRoles.map(function(roles){
       var roleCopy = Object.assign({}, roles);
       delete roleCopy.quantity;
       delete roleCopy.title;
       return roleCopy
     })

     this.context.store.dispatch({
       type: 'ADD_USER',
       name: this.state.userName,
       id: this.props.userData.users.length,
       roles: userValidRoles
     });
  },

  render: function() {

    var checkBoxNodes = this.state.userRoles.map(function(input) {
      return (
        <div className="inline"><input type="checkbox" checked={input.value} onChange={this.handleCheckBoxChange.bind(null,input.key)}></input> {input.title}</div>
      );
    },this);
    return (
      <div>
        <form onSubmit={this.handleAddUser}>
          <div className="inline"><input type="text" placeholder="Name" className="name-input" value={this.state.userName} onChange={this.handleNameChange}></input></div>
          {checkBoxNodes}
          <button className="add-button" type="submit">Add</button>
        </form>
      </div>
    );
  }
});

AddPersonForm.contextTypes = {
   store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    userData: state.userList
  }
}

const CorrectAddPersonForm = connect(
  mapStateToProps
)(AddPersonForm)

export { CorrectAddPersonForm }
