import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllChartAsync, selectChart } from "./chartSlice";
import { Table } from "../table/Table";

export function Chart() {
  const dispatch = useDispatch();
  const chart = useSelector(selectChart);

  useEffect(() => {
    dispatch(fetchAllChartAsync());
  }, [dispatch]);

  return <Table data={{ message: chart?.message || [] }} />;
}
