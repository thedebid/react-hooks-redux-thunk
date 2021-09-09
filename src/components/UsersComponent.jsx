import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUsers from "./../redux/actions/users.action";
import Card from "./CardComponent";
export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.isFetching);
  const errors = useSelector((state) => state.users.error);
  useEffect(() => {
    dispatch(getUsers.getUsers());
  }, [dispatch]);
  return loading ? (
    <h5>Loading...</h5>
  ) : errors ? (
    <h5>{errors}</h5>
  ) : (
    <div className="row">
      <h5>Users</h5>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );

  // <div>
  //   {loading && <p>Loading...</p>}
  //   {users.length === 0 && !loading && <p>No users found</p>}
  //   {errors && !loading && <p>{errors}</p>}
  //   {users.length > 0 &&
  //     users.map((user) => (
  //       <Card key={user.id} user={user} /> //key is used to identify each card
  //     ))}
  // </div>
}
