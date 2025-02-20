import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllBarsAsync, selectBars } from "./barSlice";
import { Table } from "../table/Table";

export function Bar() {
  const dispatch = useDispatch();
  const bars = useSelector(selectBars);

  useEffect(() => {
    dispatch(fetchAllBarsAsync());
  }, [dispatch]);

  return <Table data={{ message: bars?.message || [] }} />;
}
