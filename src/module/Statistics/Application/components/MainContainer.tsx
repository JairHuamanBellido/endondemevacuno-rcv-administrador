import { useEffect, useState } from "react";
import { Spinner } from "../../../../shared";
import useGetVaccineCenter from "../../../Configuration/Application/hooks/useGetVaccineCenter";
import { InflowByPeriod } from "../../Domain/model/InflowByPeriod";
import useGetInflow from "../hooks/useGetInflow";
import Filter from "./Filter";
import LineChart from "./LineChart";

export default function StatisticsMainConatiner() {
  const [currentFilter, setCurrentFilter] = useState<string>("Hoy");
  const { data, refetch, isLoading, isFetching } = useGetInflow(currentFilter);
  const { data: vaccineCenter } = useGetVaccineCenter();

  const startHour = vaccineCenter?.businessHour
    .split("-")[0]
    .slice(0, -3) as string;

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
          currentFilter={currentFilter}
          labels={
            (data as InflowByPeriod[]).length > 0
              ? (data as InflowByPeriod[]).map((e) => Object.keys(e)[0])
              : [startHour]
          }
          values={(data as InflowByPeriod[]).map(
            (e) => e[Object.keys(e)[0] as string]
          )}
        />
      </div>
    );
  }
  return <Spinner />;
}
