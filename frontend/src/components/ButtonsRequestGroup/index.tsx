import ButtonRequest from '../ButtonRequest';

type ButtonGroupTypeProps = {
  btns: string[],
  fetchLazyData: () => void,
};

export default function ButtonsRequestGroup(
  { btns, fetchLazyData }:ButtonGroupTypeProps,
) {
  return (
    <div className="m-4">
      {
        btns.map((value) => (
          <ButtonRequest
            key={ value }
            fetchLazyData={ fetchLazyData }
            type={ value }
          />
        ))
      }
    </div>
  );
}
