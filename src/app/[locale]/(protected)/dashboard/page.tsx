import DashTable from "@/components/blocks/dash-table";
import Stats11 from "@/components/blocks/stats-11";
import ChartArea from "./chart-area";

export default function DashboardPage() {
  return (
    <div className="mx-auto h-screen w-full max-w-7xl p-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Stats</h2>
          <Stats11 />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Chart</h2>
          <ChartArea />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Tasks</h2>
          <DashTable />
        </div>
      </div>
    </div>
  );
}
