import React from 'react';
import { Paper, Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import type { SalesBreakdownData } from '../../types/dashboard';
import { formatCurrency } from '../../utils/formatters';

const ChartContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  border: 'none',
  boxShadow: 'none'
}));

const LegendItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(6),
  marginBottom: theme.spacing(1.5)
}));


const Dot = styled('span')<{ color: string }>(({ color }) => ({
  display: 'inline-block',
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: 8,
  marginTop: 2
}));

const PercentageText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1c1c1c',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10,
  pointerEvents: 'none',
  background: '#fff',
  borderRadius: 8,
  padding: '2px 10px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
}));

interface SalesChartProps {
  data: SalesBreakdownData[];
}

const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const colorMap = {
    'Direct': '#1c1c1c',
    'Affilliate': '#baedbd',
    'Sponsored': '#95a4fc',
    'E-mail': '#b1e3ff'
  };

  // ApexCharts expects values, not percentages, for the donut
  const chartSeries = data.map(item => item.value);
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const mainIdx = 0;
  const mainPercent = total ? ((data[mainIdx].value / total) * 100).toFixed(1) : '0.0';

  return (
    <ChartContainer>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Total Sales
      </Typography>
      <Stack alignItems="center" sx={{ mb: 2 }}>
        <Box sx={{ width: 160, height: 160, position: 'relative' }}>
          <ReactApexChart
            options={{
              chart: {
                type: 'donut',
                sparkline: { enabled: true },
              },
              labels: data.map(item => item.category),
              colors: data.map(item => colorMap[item.category]),
              legend: { show: false },
              dataLabels: { enabled: false },
              tooltip: {
                enabled: false
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '70%',
                    labels: {
                      show: true,
                      name: { show: false },
                      value: { show: false },
                      total: {
                        show: true,
                        label: '',
                        formatter: () => `${mainPercent}%`,
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#1c1c1c',
                      }
                    }
                  }
                }
              },
              stroke: { width: 0 },
              grid: { padding: { top: 0, bottom: 0, left: 0, right: 0 } },
            }}
            series={chartSeries}
            type="donut"
            width={160}
            height={160}
          />
        </Box>
      </Stack>
      <Stack spacing={1.2}>
        {data.map((item) => (
          <LegendItem key={item.category}>
            <Box display="flex" alignItems="center">
              <Dot color={colorMap[item.category]} />
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#1c1c1c', minWidth: 70 }}>
                {item.category}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 400, color: '#1c1c1c', minWidth: 60, textAlign: 'right' }}>
              {formatCurrency(item.value)}
            </Typography>
          </LegendItem>
        ))}
      </Stack>
    </ChartContainer>
  );
};

export default SalesChart;