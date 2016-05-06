import update from 'react-addons-update';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

let initialState = {
  roles: [{key: "rich", title: "Rich"}, {key: "genius", title: "Genius"}, {key: "superpower", title: "Superpower"}],
  users: [{name: 'First', id: 0, roles: [{key: "rich", value: true}, {key: "genius", value: false}, {key: "superpower", value: true}]},{name: 'Second', id: 1, roles: [{key: "rich", value: false}, {key: "genius", value: true}, {key: "superpower", value: true}]}, {name: 'Third', id: 2, roles: [{key: "rich", value: true}, {key: "genius", value: true}, {key: "superpower", value: false}]}]
}

let userID = initialState.users.length;

const userList = (state = initialState, action) => {
  let objIndex;
  let objRole;
  let userId = userID++;
  switch (action.type){
    case 'ADD_USER':
      return update(state,{users:{$push:[{name:action.name, id:userId, roles:[...action.roles]}]}});
    case 'REMOVE_USER':
        objIndex = state.users.findIndex((obj) => obj.id === action.id)
        return update(state,{users:{$splice:[[objIndex,1]]}});
    case 'UPDATE_USER':
        objIndex = state.users.findIndex((obj) => obj.id === action.id)
        objRole = state.users[objIndex].roles.findIndex((roles) => roles.key === action.key)
        return update(state,{users:{[objIndex]:{roles:{[objRole]:{value:{$set:action.value}}}}}});
    default:
      return state;
  }
}

const filterUsers = (state = "", action) => {
  switch (action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const sortUsers = (state = {}, action) => {
  switch (action.type){
    case 'SORT_USER':
      return {key:action.key};
    case 'REVERSE_SORT_USER':
      return {key:action.key,reverse:true};
    default:
      return state;
  }
}

const userTable = combineReducers({
  userList: userList,
  filterUsers: filterUsers,
  sortUsers: sortUsers,
  routing: routerReducer
});

export default userTable;
