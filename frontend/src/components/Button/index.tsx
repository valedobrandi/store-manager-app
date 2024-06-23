type ButtonPropsType = {
  name: string,
  dispatchSelectRoute: (route: string) => { type: string; payload: { route: string }; },
  rootState: string
};

export default function Button({
  name, dispatchSelectRoute, rootState,
}: ButtonPropsType) {
  return (
    <button
      className="btn btn-outline btn-neutral uppercase m-1"
      value={ rootState }
      onClick={ () => dispatchSelectRoute(name) }
    >
      {name}
    </button>
  );
}
