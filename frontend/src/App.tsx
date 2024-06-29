import Window from './components/Window';
import useFetchProducts from './Hooks/useFetchProducts';
import Table from './components/Table';
import HTTPMethods from './components/HTTPMethods';
import EndPoints from './components/EndPoints';
import SearchType from './components/SearchType';
import SearchBar from './components/SearchBar';
import useRoutesOptions from './Hooks/useRoutesOptions';

function App() {
  const { request } = useRoutesOptions();
  const {
    columns, isSuccess,
    isLoading, selectData, usefetchLazyData } = useFetchProducts();

  return (
    <Window>
      <h1 className="text-center text-cyan-500">store-manage-app</h1>
      <div className="flex flex-col m-1">
        <EndPoints />
        <HTTPMethods />
        <div className="h-24 mb-16">
          {request === 'search' && (
            <>
              <SearchType />
              <SearchBar usefetchLazyData={ usefetchLazyData } />
            </>
          )}
        </div>
      </div>
      <Table
        isLoading={ isLoading }
        isSuccess={ isSuccess }
        columns={ columns }
        data={ selectData }
      />
    </Window>
  );
}

export default App;
