type ButtonPropsType = {
  name: string,
  dispatch: (name?: string) => void;
  store?: string;
  btnType?: string;
};

export default function Button({
  name, dispatch, store = '', btnType = 'neutral',
}: ButtonPropsType) {
  return (
    <button
      className={ `btn btn-outline btn-${btnType} uppercase m-1
        ${store === name ? 'bg-black text-white  border-none' : ''}` }
      onClick={ () => dispatch(name) }
    >
      {name}
    </button>
  );
}
