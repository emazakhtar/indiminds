import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllChartAsync } from "./chartSlice";
import { Table } from "../table/Table";

export function Chart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chart.data);

  useEffect(() => {
    dispatch(fetchAllChartAsync());
  }, [dispatch]);
  return <Table data={data} />;
}
