import RequestOptions from './components/RequestOptions';
import RouteOptions from './components/RouteOptions';
import Table from './components/Table';
import Window from './components/Window';

function App() {
  return (
    <Window>
      <h1 className="text-center m-10 text-cyan-500">store-manage-app</h1>
      <RouteOptions />
      <RequestOptions />
      <Table />
    </Window>
  );
}

export default App;
