import React from "react";
import Chart, { Props as ChartProps } from "react-apexcharts";
import { useTheme } from "@mui/material/styles";

interface Props extends ChartProps {}

const ChartContainer: React.FC<Props> = ({ type, series, ...props }) => {
  return (
    <div style={{ height: "25vh" }}>
      <Chart type={type} series={series} height="100%" {...props} />
    </div>
  );
};

export default ChartContainer;
