import UserActionsTypes from "./../constants/UserActionTypes";

const initialState = {
  isFetching: false,
  error: null,
  users: [],
};

const userReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case UserActionsTypes.GET_USER:
      return { ...state, isFetching: true };
    case UserActionsTypes.GET_USER_SUCCESS:
      return { ...state, isFetching: false, users: action.payload };
    case UserActionsTypes.GET_USER_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
