import { combineReducers } from 'redux';

// thirtparty reducer
// import { reducer as form } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

// pages reducer
import userReducer from 'modules/user/reducer';

// root reducer
const initialState = {};

const root = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  root,
  // form,
  toastr: toastrReducer,
  user: userReducer,
});
