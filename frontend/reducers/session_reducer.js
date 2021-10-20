import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER } 
  from '../actions/session_actions';

const initialState = {
  id: null
}

export default sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_CURRENT_USER):
      Object.assign({}, state, {id: action.user.id});
    case (LOGOUT_CURRENT_USER):
      return initialState;
    default:
      return state;
  }
}