import { ContentBar } from './contentbar/contentbar.jsx'
import { SideBar } from './sidebar/sidebar.jsx'

var MainContent = React.createClass({

  getInitialState: function() {
    return {
      statistic: [{title:"Super power", quantity:0, key:"superpower", activeFilter:false},{title:"Rich", quantity:0, key:"rich", activeFilter:false},{title:"Genius",quantity:0, key:"genius", activeFilter:false}],
      total: 0,
      users: [{name:"name1", props:[{key:"superpower",value:true},{key:"rich",value:true},{key:"genius",value:true}], id:0},{name:"name2", props:[{key:"superpower",value:true},{key:"rich",value:false},{key:"genius",value:true}], id:1},{name:"name3", props:[{key:"superpower",value:true},{key:"rich",value:false},{key:"genius",value:true}], id:2}],
      filteredUsers: []
    };
  },

  componentWillMount: function(){
    this.updateStatistic();
  },

  /**
   * function for filtering users
   * @param  {string} key to filter users by
   * @return {arrayOfUsers} return new array with filtered users
   */
  filterUsers: function(key){

    var newStatistic = [...this.state.statistic];
    for (let i = 0; i < newStatistic.length; i++){
      newStatistic[i].activeFilter = false;
      if(newStatistic[i].key === key){
        newStatistic[i].activeFilter = true;
      }
    }

    if(key){
      var filteredArray = this.state.users.filter(function(user){
        for(let i = 0; i < user.props.length; i++){
          if(user.props[i].key === key && user.props[i].value){
            return true;
          }
        }
      })
      this.setState({filteredUsers: filteredArray});
    } else{
      this.setState({filteredUsers: [...this.state.users]});
    }
  },

  /**
   * function for update statistic
   */
  updateStatistic: function(){
    var newStatistic = [...this.state.statistic];
    var activeFilterKey;

    for(let m = 0; m < newStatistic.length; m++){
      newStatistic[m].quantity = 0;
      if(newStatistic[m].activeFilter){
        activeFilterKey = newStatistic[m].key
      }
    }

    this.filterUsers(activeFilterKey);

    for(let i = 0; i < this.state.users.length; i++){
      for(let z = 0; z < this.state.users[i].props.length; z++){
        if(this.state.users[i].props[z].value){

          for(let m = 0; m < newStatistic.length; m++){
            if(newStatistic[m].key === this.state.users[i].props[z].key){
              newStatistic[m].quantity++
            }
          }

        }
      }
    }
    this.setState({statistic: newStatistic, total: this.state.users.length});
  },

  /**
   * function for updated user state
   * @param  {number} userId
   * @param  {string} propKey property key name
   */
  updateUser: function(userId,propKey){
    var newUserState = this.state.users.map(function(user){
      if(user.id === userId){
        for(var i = 0; i < user.props.length; i++){
          if(user.props[i].key === propKey){
            user.props[i].value = !user.props[i].value
            return user;
          }
        }
      }else {
        return user;
      }
    })
    this.setState({users: newUserState});
    this.updateStatistic();
  },

  render: function() {
    return (
      <div className="col-10 col-offset-1">
        <ContentBar statistic={this.state.statistic} filteredUsers={this.state.filteredUsers} onUserFilter={this.filterUsers} onUpdateUser={this.updateUser}/>
        <SideBar statistic={this.state.statistic} total={this.state.total} onUserFilter={this.filterUsers}/>
      </div>
    );
  }
});

ReactDOM.render(
  <MainContent />,
  document.getElementById('root')
);
