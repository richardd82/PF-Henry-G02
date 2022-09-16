import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosUsuarios } from "../../../../redux/actions";

const UsersStats = () => {
  const allUsers = useSelector((state) => state.users.allUsers);
  let usersActive = 0;
  let usersInactive = 0;
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);

  allUsers.map((e) => {
    if (e.active === true) {
      usersActive++;
    } else if (e.active === false) {
      usersInactive++;
    }
  });
  return (
    <>
      <div>🟢Usuarios activos: {usersActive}</div>
      <div>🔴Usuarios inactivos: {usersInactive}</div>
    </>
  );
};

export default UsersStats;