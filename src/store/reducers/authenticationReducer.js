import TYPES from '../actions/types';

const authenticationReducer = (state = {}, { type, payload }) => {
  switch(type) {
    case TYPES.LOGIN: return { ...payload, isLogged: true };
    case TYPES.LOGOUT: return { isLogged: false }
    default: return state;
  }
};

export default authenticationReducer;
