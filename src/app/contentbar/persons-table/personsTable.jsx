import React from 'react';
import { connect } from 'react-redux';

var PersonsTable = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  handleRemoveUser: function(userId){
     this.context.store.dispatch({
       type: 'REMOVE_USER',
       id: userId
     });
  },

  render: function() {
    var thNodes = this.props.userData.roles.map(function(th) {
      return (
        <th>{th.title}</th>
      );
    });
    var userRecords = this.props.userData.users.map(function(user){
      var that = this;
      var props = user.roles.map(function(prop){
        return(
          <td className="with-input"><input type="checkbox" checked={prop.value}/></td>
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
                <th>Name</th>
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

const mapStateToProps = (state) => {
  return {
    userData: state.userList
  }
}

const CorrectPersonsTable = connect(
  mapStateToProps
)(PersonsTable)

export { CorrectPersonsTable }
