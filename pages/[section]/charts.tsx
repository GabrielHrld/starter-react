import React from "react";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

import Headband from "../../components/headband/Headband";
import Section from "../../components/Layout/Section";
import Card from "../../components/card/Card";
import Typography from "@mui/material/Typography";
import { Props as ChartProps } from "react-apexcharts";

// component needed be rendered in client-side
const ChartContainer = dynamic(
  () => import("../../components/charts/ChartContainer"),
  {
    ssr: false,
  }
);
const chartLineOptions: ChartProps = {
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

const pieChartOptions: ChartProps = {
  type: "polarArea",
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  options: {
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const charts = () => {
  return (
    <>
      <Headband title="UI Kit" subtitle="Gráficos" />
      <Section>
        <Grid container>
          <Grid item sm={6} md={4}>
            <Card>
              <Typography variant="h5" noWrap style={{ marginBottom: 30 }}>
                Gráfico de líneas
              </Typography>
              <ChartContainer {...chartLineOptions} />
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card>
              <Typography variant="h5" noWrap style={{ marginBottom: 30 }}>
                Gráfico de barras
              </Typography>
              <ChartContainer type="bar" {...chartLineOptions} />
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card>
              <Typography variant="h5" noWrap style={{ marginBottom: 30 }}>
                Gráfico Polar
              </Typography>
              <ChartContainer {...pieChartOptions} />
            </Card>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default charts;
