import React from 'react';

var PersonsTable = React.createClass({

  propTypes: {
    statistic: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filteredUsers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onUpdateUser: React.PropTypes.func.isRequired,
    onDeleteUser: React.PropTypes.func.isRequired
  },

  /**
   * call back function for update state
   * @param  {number} userId
   * @param  {string} propKey property key name
   */
  updateUser: function(userId,propKey){
    this.props.onUpdateUser(userId,propKey)
  },

  render: function() {
    var thNodes = this.props.statistic.map(function(th) {
      return (
        <th>{th.title}</th>
      );
    });
    var userRecords = this.props.filteredUsers.map(function(user){
      var that = this;
      var props = user.props.map(function(prop){
        return(
          <td className="with-input"><input type="checkbox" checked={prop.value} onChange={that.updateUser.bind(null,user.id,prop.key)}/></td>
        );
      },that);

      return (
        <tr key={user.id}>
            <td>{user.name}</td>
            {props}
            <td className="with-input"><span onClick={this.props.onDeleteUser.bind(null,user.id)}>X</span></td>
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

export { PersonsTable }
