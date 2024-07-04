import Window from './components/Window';
import useFetchProducts from './Hooks/useFetchData';
import Table from './components/Table';
import HTTPMethods from './components/HTTPMethods';
import EndPoints from './components/EndPoints';
import SearchBar from './components/SearchBar';
import useConditionalRendering from './Hooks/useConditionalRendering';
import RegisterBar from './components/RegisterBar';

import BarDelete from './components/BarDelete';
import BarUpdate from './components/BarUpdate';
import useSendData from './Hooks/useSendData';
import Alerts from './components/Alerts';

function App() {
  const { isFetch, isRegister, isDelete, isUpdate } = useConditionalRendering();
  const { sendHttp } = useSendData();
  const { fetchHttp } = useFetchProducts();

  return (
    <Window>
      <h1 className="text-center text-black text-5xl">Data-Base Manager</h1>
      <div className="flex flex-col m-1">
        <EndPoints />
        <HTTPMethods />
        <div className="">
          {isFetch() && (
            <Alerts
              isSuccess={ fetchHttp.isSuccess }
              isError={ fetchHttp.isError }
              error={ fetchHttp.error }
              sendData={ { message: 'SUCCESS' } }
            >
              <SearchBar usefetchLazyData={ fetchHttp.usefetchLazyData } />
            </Alerts>
          )}
          {isRegister() && (
            <Alerts
              isSuccess={ sendHttp.isSuccess }
              isError={ sendHttp.isError }
              error={ sendHttp.error }
              sendData={ sendHttp.sendData }
            >
              <RegisterBar usefetchLazyData={ sendHttp.useSendLazyData } />
            </Alerts>
          )}

          {isDelete() && (
            <Alerts
              isSuccess={ sendHttp.isSuccess }
              isError={ sendHttp.isError }
              error={ sendHttp.error }
              sendData={ sendHttp.sendData }
            >
              <BarDelete usefetchLazyData={ sendHttp.useSendLazyData } />
            </Alerts>
          )}
          {isUpdate() && (
            <Alerts
              isSuccess={ sendHttp.isSuccess }
              isError={ sendHttp.isError }
              error={ sendHttp.error }
              sendData={ sendHttp.sendData }
            >
              <BarUpdate usefetchLazyData={ sendHttp.useSendLazyData } />
            </Alerts>
          )}

        </div>
      </div>
      <div className="m-4">
        <Table
          data={ fetchHttp.fetchData }
        />
      </div>
    </Window>
  );
}

export default App;
