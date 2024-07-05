/* eslint-disable react/jsx-max-depth */
import Window from './components/Window';
import useFetchProducts from './Hooks/useFetchData';
import Table from './components/Table';
import HTTPMethods from './components/HTTPMethods';
import EndPoints from './components/EndPoints';
import SearchBar from './components/BarSearch';
import useConditionalRendering from './Hooks/useConditionalRendering';
import RegisterBar from './components/BarRegister';

import BarDelete from './components/BarDelete';
import BarUpdate from './components/BarUpdate';
import useSendData from './Hooks/useSendData';
import Alerts from './components/Alerts';
import TransitionEvent from './components/Transition';

function App() {
  const { isFetch, isRegister, isDelete, isUpdate, isData } = useConditionalRendering();
  const { sendHttp } = useSendData();
  const { fetchHttp, salesData, productsData } = useFetchProducts();

  return (
    <Window>
      <h1 className="text-center text-black text-5xl">Data-Base Manager</h1>
      <div className="flex flex-col m-1">
        <EndPoints />
        <HTTPMethods />
        <div className="">
          <TransitionEvent display={ isFetch() } time={ 100 }>
            <Alerts
              isSuccess={ fetchHttp.isSuccess }
              isError={ fetchHttp.isError }
              error={ fetchHttp.error }
              message="SUCCESS"
            >
              <SearchBar usefetchLazyData={ fetchHttp.usefetchLazyData } />
            </Alerts>
          </TransitionEvent>
          <TransitionEvent display={ isRegister() } time={ 200 }>
            <Alerts
              isSuccess={ sendHttp.isSuccess }
              isError={ sendHttp.isError }
              error={ sendHttp.error }
              message={ sendHttp.sendData }
            >
              <RegisterBar usefetchLazyData={ sendHttp.useSendLazyData } />
            </Alerts>
          </TransitionEvent>
          <TransitionEvent display={ isDelete() } time={ 200 }>
            <Alerts
              isSuccess={ sendHttp.isSuccess }
              isError={ sendHttp.isError }
              error={ sendHttp.error }
              message="SUCCESS"
            >
              <BarDelete usefetchLazyData={ sendHttp.useSendLazyData } />
            </Alerts>
          </TransitionEvent>
          <TransitionEvent display={ isUpdate() } time={ 200 }>
            <Alerts
              isSuccess={ sendHttp.isSuccess }
              isError={ sendHttp.isError }
              error={ sendHttp.error }
              message={ sendHttp.sendData }
            >
              <BarUpdate usefetchLazyData={ sendHttp.useSendLazyData } />
            </Alerts>
          </TransitionEvent>
        </div>
      </div>
      <TransitionEvent display={ isData(fetchHttp.fetchData.length > 0) } time={ 200 }>
        <Table
          data={ fetchHttp.fetchData }
          useRefresh={ () => undefined }
        />
      </TransitionEvent>
      <Table data={ productsData } useRefresh={ fetchHttp.productsRefresh } />
      <Table data={ salesData } useRefresh={ fetchHttp.salesRefresh } />
    </Window>
  );
}

export default App;
