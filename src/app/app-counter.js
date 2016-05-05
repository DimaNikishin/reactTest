import update from 'react-addons-update';
import { combineReducers } from 'redux';

let initialState = {
  roles: [{key: "rich", title: "Rich"}, {key: "genius", title: "Genius"}, {key: "superpower", title: "Superpower"}],
  users: [{name: 'First', id: 0, roles: [{key: "rich", value: true}, {key: "genius", value: false}, {key: "superpower", value: true}]},{name: 'Second', id: 1, roles: [{key: "rich", value: false}, {key: "genius", value: true}, {key: "superpower", value: true}]}, {name: 'Third', id: 2, roles: [{key: "rich", value: true}, {key: "genius", value: true}, {key: "superpower", value: false}]}]
}


const userList = (state = initialState, action) => {
  let objIndex;
  switch (action.type){
    case 'ADD_USER':
      return update(state,{users:{$push:[{name:action.name, id:action.id, roles:[...action.roles]}]}});
    case 'REMOVE_USER':
        objIndex = state.users.findIndex((obj) => obj.id === action.id)
        return update(state,{users:{$splice:[[objIndex,1]]}});
    default:
      return state;
  }
}

const filterUsers = (state = "SHOW_ALL", action) => {
  switch (action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const userTable = combineReducers({
  userList: userList,
  filterUsers: filterUsers
});

export default userTable;
