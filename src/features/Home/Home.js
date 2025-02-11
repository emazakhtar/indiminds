import { useDispatch, useSelector } from "react-redux";
import { fetchAllSummaryAsync } from "../summary/summarySlice";
import { fetchAllDetailsAsync } from "../details/detailSlice";
import { useEffect } from "react";
import { Table } from "../table/Table";

export function Home() {
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.summary.data);
  const details = useSelector((state) => state.details.data);

  useEffect(() => {
    dispatch(fetchAllSummaryAsync());
    dispatch(fetchAllDetailsAsync());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Live Position Detail</h2>
      <Table data={details} />
      <h2 className="text-xl font-semibold mt-6">Live Position Summary</h2>
      <Table data={summary} />
    </div>
  );
}
