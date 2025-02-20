import { useDispatch, useSelector } from "react-redux";
import { Table } from "../table/Table";
import { fetchAllSummaryAsync, selectSummary } from "../summary/summarySlice";
import { fetchAllDetailsAsync, selectDetails } from "../details/detailSlice";
import { useEffect } from "react";

export function Home() {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const details = useSelector(selectDetails);

  console.log("details", details);

  useEffect(() => {
    dispatch(fetchAllSummaryAsync());
    dispatch(fetchAllDetailsAsync());
  }, [dispatch]);

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-semibold">Live Position Detail</h2>
      <Table data={{ message: details?.message || [] }} />
      <h2 className="text-xl font-semibold mt-6">Live Position Summary</h2>
      <Table data={{ message: summary?.message || [] }} />
    </div>
  );
}
