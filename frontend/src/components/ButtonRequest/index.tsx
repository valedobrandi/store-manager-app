type ButtonPropsType = {
  type: string,
  fetchLazyData: (params: boolean) => void;
};

export default function ButtonRequest({
  type, fetchLazyData,
}: ButtonPropsType) {
  return (
    <button
      className="btn btn-outline btn-neutral uppercase m-1"
      onClick={ () => fetchLazyData(true) }
    >
      {type}
    </button>
  );
}
