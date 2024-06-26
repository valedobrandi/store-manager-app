type ButtonPropsType = {
  type: string,
  dispatch: (params: string) => {
    payload: any;
    type: string;
  };
  name: string;
};

export default function Button({
  type, dispatch, name,
}: ButtonPropsType) {
  return (
    <button
      className="btn btn-outline btn-neutral uppercase m-1"
      value={ name }
      onClick={ () => dispatch(type) }
    >
      {type}
    </button>
  );
}
