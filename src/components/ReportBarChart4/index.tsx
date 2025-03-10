import Chart from "@/components/Base/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "@/utils/colors";
import { selectColorScheme } from "@/redux-toolkit/slices/common/colorScheme/colorSchemeSlice";
import { selectDarkMode } from "@/redux-toolkit/slices/common/darkMode/darkModeSlice";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import { useMemo } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width?: number | "auto";
  height?: number | "auto";
}

function Main({ width = "auto", height = "auto", className = "" }: MainProps) {
  const props = { width: width, height: height, className: className };
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data: ChartData = useMemo(() => {
    const configData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          barPercentage: 0.38,
          borderRadius: 2,
          data: [4, 7, 5, 4, 9, 7, 5],
          borderWidth: 1,
          borderColor: colorScheme ? getColor("theme.1", 0.7) : "",
          backgroundColor: colorScheme ? getColor("theme.1", 0.3) : "",
        },
      ],
    };

    return darkMode ? configData : configData;
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: getColor("slate.500", 0.8),
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="bar"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

export default Main;
