import { useEffect, useState } from "react";
import { Spinner } from "../../../../shared";
import { InflowByPeriod } from "../../Domain/model/InflowByPeriod";
import useGetInflow from "../hooks/useGetInflow";
import Filter from "./Filter";
import LineChart from "./LineChart";

export default function StatisticsMainConatiner() {
  const [currentFilter, setCurrentFilter] = useState<string>("Hoy");
  const { data, refetch, isLoading, isFetching } = useGetInflow(currentFilter);
  const onClickFilter = (filter: string) => {
    setCurrentFilter(filter);
  };
  useEffect(() => {
    refetch();
  }, [currentFilter, refetch]);
  if (data !== undefined || !isLoading || !isFetching) {
    return (
      <div className="relative w-full">
        <div className="flex items-center justify-end w-full">
          <Filter currentFilter={currentFilter} onClickFilter={onClickFilter} />
        </div>
        <LineChart
          labels={(data as InflowByPeriod[]).map((e) => Object.keys(e)[0])}
          values={(data as InflowByPeriod[]).map(
            (e) => e[Object.keys(e)[0] as string]
          )}
        />
        {/* <LineChart labels={["09:30"]} values={[34]} /> */}
      </div>
    );
  }
  return <Spinner />;
}
