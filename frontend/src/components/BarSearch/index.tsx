import useCollapse from '../../Hooks/useCollapse';
import useConditionalRendering from '../../Hooks/useConditionalRendering';
import ButtonJoinGroup from '../ButtonJoinGroup';
import Table from '../Table';

type SearchBarPops = {
  searchData: [] | object[];
};

export default function SearchBar({ searchData }: SearchBarPops) {
  const { close, onCloseWindown } = useConditionalRendering();
  const { onSetCollapse, visible } = useCollapse();

  return (
    <div>
      {searchData.length > 0 && (
        <Table
          data={ searchData }
          close={ close }
          visible={ visible }
        >
          <ButtonJoinGroup title="HIDE" onHandleClick={ onSetCollapse } />
          <ButtonJoinGroup
            title="CLOSE"
            color="text-red-600 btn-warning"
            onHandleClick={ () => { onCloseWindown(true); } }
          />
        </Table>)}
    </div>

  );
}
