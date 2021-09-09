import UserActionsTypes from "./../constants/UserActionTypes";
import axios from "axios";
import UserActionTypes from "./../constants/UserActionTypes";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const getUsers = (params) => (dispatch) => {
  dispatch({ type: UserActionsTypes.GET_USER, payload: true });
  axiosInstance
    .get("/users")
    .then((res) => {
      dispatch({ type: UserActionTypes.GET_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: UserActionTypes.GET_USER_FAILURE,
        payload: err.message,
      });
    });
};

function addUser(user) {
  return function (dispatch) {
    dispatch({
      type: UserActionsTypes.ADD_USER,
      payload: user,
    });
  };
}
const exportedObject = {
  getUsers,
  addUser,
};
export default exportedObject;
