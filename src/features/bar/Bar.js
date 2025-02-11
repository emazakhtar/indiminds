import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllBarsAsync } from "./barSlice";
import { Table } from "../table/Table";

export function Bar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.bar.data);

  useEffect(() => {
    dispatch(fetchAllBarsAsync());
  }, [dispatch]);
  return <Table data={data} />;
}
