import React from 'react';
import update from 'react-addons-update';

var AddPersonForm = React.createClass({

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      newUser: this.props.user
    };
  },

  handlePropChange: function(inputKey){
    var newUserState, newValue;
    for(var i = 0; i < this.state.newUser.props.length; i++){
      if(this.state.newUser.props[i].key === inputKey){
        newValue = !this.state.newUser.props[i].value;
        newUserState = update(this.state.newUser, {
          props:{[i]:{value: {$set: newValue}}}
        })
      }
    }
    this.setState({newUser: newUserState});
  },

  handleNameChange: function(e){
    var newUserState = update(this.state.newUser, {
      name:{$set: e.target.value}
    })
    this.setState({newUser: newUserState});
  },

  handleSubmit: function(e) {
   e.preventDefault();

   var newUserState = update(this.state.newUser, {
     name:{$set: ""}
   })

   this.props.onAddUser(this.state.newUser);
   this.setState({newUser: newUserState});
 },

  render: function() {
    var checkBoxNodes = this.state.newUser.props.map(function(input) {
      return (
        <div className="inline"><input type="checkbox" checked={input.value} onChange={this.handlePropChange.bind(null,input.key)}></input> {input.title}</div>
      );
    },this);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="inline"><input type="text" placeholder="Name" className="name-input" value={this.state.newUser.name} onChange={this.handleNameChange}></input></div>
          {checkBoxNodes}
          <button className="add-button" type="submit">Add</button>
        </form>
      </div>
    );
  }
});

export { AddPersonForm }
