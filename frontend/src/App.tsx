import Window from './components/Window';
import useRoutesOptions from './Hooks/useRoutesOptions';
import ButtonsGroup from './components/ButtonsGroup';
import ButtonsRequestGroup from './components/ButtonsRequestGroup';
import useFetchProducts from './Hooks/useFetchProducts';
import Table from './components/Table';

function App() {
  const {
    dispatchSelectRoute, dispatchSelectRequest,
    route, request, btnRoutes, btnRequests, btnSearch,
  } = useRoutesOptions();
  const { usefetchLazyData, data, columns, isSuccess, isLoading } = useFetchProducts();

  return (
    <Window>
      <h1 className="text-center text-cyan-500">store-manage-app</h1>
      <div className="flex flex-col m-1">
        <ButtonsGroup
          btns={ btnRoutes }
          dispatch={ dispatchSelectRoute }
          name={ route }
        />
        <ButtonsGroup
          btns={ btnRequests }
          dispatch={ dispatchSelectRequest }
          name={ request }
        />
        <div className="h-20">
          {request === 'search' && (
            <ButtonsRequestGroup
              btns={ btnSearch }
              fetchLazyData={ usefetchLazyData }
            />)}
        </div>
      </div>
      <Table
        isLoading={ isLoading }
        isSuccess={ isSuccess }
        columns={ columns }
        data={ data }
      />
    </Window>
  );
}

export default App;
