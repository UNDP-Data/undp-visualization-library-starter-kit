import { SingleGraphDashboardFromConfig } from '@undp-data/undp-visualization-library';
import '@undp-data/undp-visualization-library/dist/style.css';

function App() {
  return (
    <div>
      <SingleGraphDashboardFromConfig config='/config/verticalGroupedBarChart.json' />
    </div>
  );
}

export default App;
