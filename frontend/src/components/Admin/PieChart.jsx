import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import { Panel } from 'rsuite';

const defaultOptions = {
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '75%'
      },
      offsetY: 0
    },
    stroke: {
      colors: undefined
    }
  },
  colors: ['#5f71e4', '#2dce88', '#fa6340', '#f5365d', '#13cdef'],
  legend: {
    position: 'bottom',
    offsetY: 0
  }
};

const PieChart = ({ title, data, type, labels, options }) => (
  <Panel className="card" style={{ height: 380 }} bodyFill header={title}>
    <Chart
      series={data}
      type={type}
      height={340}
      options={Object.assign({}, defaultOptions, options, { labels })}
    />
  </Panel>
);

PieChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  type: PropTypes.oneOf([
    'line',
    'area',
    'bar',
    'histogram',
    'pie',
    'donut',
    'radialBar',
    'scatter',
    'bubble',
    'heatmap',
    'treemap',
    'boxPlot',
    'candlestick',
    'radar',
    'polarArea',
    'rangeBar'
  ]),
  labels: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.any,
};

export default PieChart;
