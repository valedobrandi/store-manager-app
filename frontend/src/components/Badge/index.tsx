/* eslint-disable jsx-a11y/control-has-associated-label */

type BadgeType = {
  btnBadge: (param: boolean) => void
};
export default function Badge({ btnBadge }: BadgeType) {
  return (
    <button
      onClick={ () => btnBadge(true) }
      className="badge badge-warning gap-2 ml-[95%]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-4 w-4 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
