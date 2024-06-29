type ButtonPropsType = {
  name: string,
  dispatch: (params: string) => {
    payload: any;
    type: string;
  };
  store: string;
};

export default function Button({
  name, dispatch, store,
}: ButtonPropsType) {
  return (
    <button
      className={ `btn btn-outline btn-neutral uppercase m-1 
        ${store === name ? 'bg-black text-white  border-none' : ''}` }
      value={ store }
      onClick={ () => dispatch(name) }
    >
      {name}
    </button>
  );
}
