import {
  GriddedGraphsFromConfig,
  MultiGraphDashboardFromConfig,
  SingleGraphDashboardFromConfig,
} from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function App() {
  return (
    <div>
      <MultiGraphDashboardFromConfig config='/config/dashboard.json' />
      <GriddedGraphsFromConfig config='/config/griddedChart.json' />
      <SingleGraphDashboardFromConfig config='/config/lineChart.json' />
    </div>
  );
}

export default App;
