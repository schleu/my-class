import * as echarts from "echarts";
import { useEffect } from "react";

import { useRef } from "react";
import { Section } from "../../../../components/Section";
import { courseStatistic } from "../../../../moked/courses";

export function DashboardPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const myChart = echarts.init(ref.current);

      const xAxisData = courseStatistic.courses.map((e) => e.name);
      const seriesData = courseStatistic.courses.map((e) => e.progress);

      myChart.setOption({
        title: {
          text: "Progresso dos cursos",
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
        },
        yAxis: {},
        series: [
          {
            name: "progresso",
            type: "bar",
            data: [...seriesData, 100],
          },
        ],
      });
    }
  }, [ref]);

  return (
    <Section title="Dashboard">
      <div className="w-full flex flex-wrap gap-4">
        <div className="w-full h-52 flex ">
          <div ref={ref} className="w-full h-full"></div>
        </div>
      </div>
    </Section>
  );
}
