import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllDetailsAsync } from "./detailSlice";
import { Table } from "../table/Table";

export function Details() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details.data);

  useEffect(() => {
    dispatch(fetchAllDetailsAsync());
  }, [dispatch]);
  return <Table data={data} />;
}
