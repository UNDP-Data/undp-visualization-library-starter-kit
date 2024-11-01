// import { GriddedGraphsFromConfig } from '@undp-data/undp-visualization-library';
// import { SingleGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
// import { MultiGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
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
      {/* <SingleGraphDashboardFromConfig config='/config/chartsAnimated/animatedBarChart.json' /> */}

      {/* Single Chart with Filter */}

      {/* Single Chart with Data Selection */}

      {/* Gridded Chart (Small Multiples) */}
      {/* <GriddedGraphsFromConfig config='/config/chartsGridded/griddedChart.json' /> */}

      {/* Dashboard */}
      {/* <MultiGraphDashboardFromConfig config='/config/dashboards/dashboard.json' /> */}
    </div>
  );
}

export default App;
