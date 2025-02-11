import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllSummaryAsync } from "./summarySlice";
import { Table } from "../table/Table";

export function Summary() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.summary.data);

  useEffect(() => {
    dispatch(fetchAllSummaryAsync());
  }, [dispatch]);
  return <Table data={data} />;
}
