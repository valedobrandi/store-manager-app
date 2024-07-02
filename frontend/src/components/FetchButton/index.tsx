type FetchButtonProps = {
  usefetchLazyData: (query: { name: string, id: string }) => void;
  input: {
    name: string;
    id: string;
  }
  title: string;
};

export default function FetchButton({
  usefetchLazyData, title, input }: FetchButtonProps) {
  return (
    <button
      className="btn btn-outline btn-neutral uppercase m-1"
      onClick={() => usefetchLazyData(input)}
    >
      {title}
    </button>
  );
}
