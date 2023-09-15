
import { useRef } from 'react';

import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';


const MockChartData = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const series = [
    {
      type: 'bar',
      stack: '',
      yAxisKey: 'eco',
      data: [2, 5, 3, 4, 1],
    },
    {
      type: 'bar',
      stack: '',
      yAxisKey: 'eco',
      data: [5, 6, 2, 8, 9],
    },
    {
      type: 'line',
      yAxisKey: 'pib',
      color: 'red',
      data: [1000, 1500, 3000, 5000, 10000],
    },
  ] as AllSeriesType[];

  return (
    <ChartContainer
      series={series}
      sx={{width: '100%', display: 'block'}}
      width={windowSize.current[0] / 2}
      height={500}
      xAxis={[
        {
          id: 'years',
          data: [2019, 2020, 2021, 2022, 2023],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Years" position="bottom" axisId="years" />
      <ChartsYAxis label="Gov spending on other fields" position="left" axisId="eco" />
      <ChartsYAxis label="PIB" position="right" axisId="pib" />
    </ChartContainer>
  );

}

export default MockChartData;
