import React from "react";
import Chart, { ChartElement } from "@/components/Base/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { selectColorScheme } from "@/redux-toolkit/slices/common/colorScheme/colorSchemeSlice";
import { selectDarkMode } from "@/redux-toolkit/slices/common/darkMode/darkModeSlice";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import { useMemo, useRef } from "react";
import { getColor } from "@/utils/colors";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width?: number | "auto";
  height?: number | "auto";
}

function Main({ width = "auto", height = "auto", className = "" }: MainProps) {
  const props = {
    width: width,
    height: height,
    className: className,
  };
  const reportLineChartRef = useRef<ChartElement | null>();
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const getBackground = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx?.createLinearGradient(0, 0, 0, 90);
    gradient?.addColorStop(0, getColor("success", 0.4));
    gradient?.addColorStop(1, darkMode ? "#28344e00" : "#ffffff01");
    return gradient;
  };

  const data: ChartData = useMemo(() => {
    const chartData: number[][] = [
      [
        0, 5, 35, 40, 39, 33, 32, 37, 36, 30, 24, 18, 48, 53, 52, 82, 112, 106,
        136, 141, 140, 139, 138, 143, 173, 203, 233, 263, 257, 258, 233, 208,
        183, 177, 171, 201, 231, 206, 207, 237, 231, 206, 207, 182, 212, 206,
        181, 211, 186, 161, 191, 190, 195, 200, 194, 199, 193, 223, 253, 247,
        252, 257, 262, 256, 261, 266, 296, 295, 300, 305, 310, 309, 303, 308,
        313,
      ],
      [
        0, 30, 35, 65, 70, 64, 94, 99, 104, 98, 92, 122, 116, 121, 115, 109,
        103, 108, 138, 132, 126, 120, 150, 180, 210, 211, 186, 161, 155, 130,
        160, 135, 110, 140, 115, 145, 139, 133, 108, 109, 84, 85, 60, 35, 36,
        11, 5, -20, -26, -51, -21, -27, -33, -28, -23, -29, 1, 6, 11, 5, 10, 40,
        45, 50, 55, 49, 54, 84, 89, 119, 124, 129, 134, 139, 169,
      ],
    ];

    return {
      labels: chartData[0],
      datasets: [
        {
          data: chartData[0] ?? [],
          borderWidth: 1.3,
          borderColor: colorScheme ? getColor("success", 0.7) : "",
          pointRadius: 0,
          tension: 0.3,
          backgroundColor: getBackground(),
          fill: true,
        },
        {
          data: chartData[1] ?? [],
          borderWidth: 1.2,
          borderColor: colorScheme ? getColor("slate.500", 0.5) : "",
          pointRadius: 0,
          tension: 0.3,
          borderDash: [3, 2],
          backgroundColor: "transparent",
          fill: true,
        },
      ],
    };
  }, [reportLineChartRef.current, colorScheme, darkMode]);

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
            display: false,
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
  }, [reportLineChartRef.current, colorScheme, darkMode]);

  return (
    <>
      <Chart
        type="line"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
        getRef={(el) => {
          reportLineChartRef.current = el;
        }}
      />
    </>
  );
}

export default Main;
