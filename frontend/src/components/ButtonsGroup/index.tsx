import Button from '../Button';

type ButtonGroupTypeProps = {
  btns: string[],
  dispatch: (params: string) => {
    payload: any;
    type: string;
  };
  name: string;
};

export default function ButtonsGroup({ btns, name, dispatch }:ButtonGroupTypeProps) {
  return (
    <div className="m-4">
      {
        btns.map((value) => (
          <Button
            key={ value }
            dispatch={ dispatch }
            name={ name }
            type={ value }
          />
        ))
      }
    </div>
  );
}
