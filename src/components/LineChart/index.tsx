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
  lineColor?: string;
}

function Main({
  width = "auto",
  height = "auto",
  lineColor = "",
  className = "",
}: MainProps) {
  const props = {
    width: width,
    height: height,
    lineColor: lineColor,
    className: className,
  };
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data: ChartData = useMemo(() => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Html Template",
          data: [0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100, 900, 1200],
          borderWidth: 2,
          borderColor: colorScheme ? getColor("primary") : "",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
        {
          label: "VueJs Template",
          data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
          borderWidth: 2,
          borderDash: [2, 2],
          borderColor: darkMode
            ? getColor("slate.400", 0.6)
            : getColor("slate.400"),
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: getColor("slate.500", 0.8),
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12,
            },
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
            font: {
              size: 12,
            },
            color: getColor("slate.500", 0.8),
            callback: function (value) {
              return "$" + value;
            },
          },
          grid: {
            color: darkMode
              ? getColor("slate.500", 0.3)
              : getColor("slate.300"),
            borderDash: [2, 2],
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
      type="line"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

export default Main;
