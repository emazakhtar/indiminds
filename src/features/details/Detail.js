import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllDetailsAsync, selectDetails } from "./detailSlice";
import { Table } from "../table/Table";

export function Details() {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  console.log("detail data", details);

  useEffect(() => {
    dispatch(fetchAllDetailsAsync());
  }, [dispatch]);

  return <Table data={{ message: details?.message || [] }} />;
}
