import React from "react";
import Chart, { Props as ChartProps } from "react-apexcharts";
import { useTheme } from "@mui/material/styles";

const chartOptions: ChartProps = {
  series: [
    {
      name: "Online customers",
      data: [40, 70, 20, 90, 12, 30, 66, 56, 10],
    },
    {
      name: "Store Customers",
      data: [10, 20, 13, 22, 30, 11, 8, 23, 25],
    },
  ],
  options: {
    colors: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

interface Props {
  type?:
    | "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | undefined;
}

const ChartContainer: React.FC<Props> = ({ type }) => {
  const theme = useTheme();
  return (
    <div style={{ height: "25vh" }}>
      <Chart
        options={{
          ...chartOptions.options,
          colors: [theme.palette.primary.main, theme.palette.secondary.main],
        }}
        series={chartOptions.series}
        height="100%"
        type={type}
      />
    </div>
  );
};

export default ChartContainer;
