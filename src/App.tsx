// import { GriddedGraphsFromConfig } from '@undp-data/undp-visualization-library';
// import { SingleGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import { MultiGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function App() {
  return (
    <div className='flex-div flex-column'>
      {/* Single Charts */}
      {/* <SingleGraphDashboardFromConfig config='/config/charts/barChart.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/groupedBarChart.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/stackedBarChart.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/lineChart.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/multiLineChart.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/choroplethMap.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/donutChart.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/circlePacking.json' />
      <SingleGraphDashboardFromConfig config='/config/charts/scatterPlot.json' /> */}

      {/* Animated Single Charts */}
      {/* <SingleGraphDashboardFromConfig config='/config/chartsAnimated/animatedBarChart.json' />
      <SingleGraphDashboardFromConfig config='/config/chartsAnimated/animatedScatterPlot.json' />
      <SingleGraphDashboardFromConfig config='/config/chartsAnimated/animatedChoroplethMap.json' /> */}

      {/* Single Chart with Filter */}
      {/* <SingleGraphDashboardFromConfig config='/config/charts/barChartWithFilter.json' /> */}

      {/* Single Chart with Data Selection */}
      {/* <SingleGraphDashboardFromConfig config='/config/charts/barChartWithDataSelection.json' /> */}

      {/* Gridded Chart (Small Multiples) */}
      {/* <GriddedGraphsFromConfig config='/config/chartsGridded/griddedChart.json' /> */}

      {/* Dashboard */}
      <MultiGraphDashboardFromConfig config='/config/dashboards/dashboard.json' />
    </div>
  );
}

export default App;
