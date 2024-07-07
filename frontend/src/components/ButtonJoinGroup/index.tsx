interface ButtonJoinGroupType {
  color?: string;
  title: string;
  onHandleClick: () => void;
}

export default function ButtonJoinGroup(
  {
    color = 'btn-warning',
    title,
    onHandleClick,
  }: ButtonJoinGroupType,
) {
  const styles = [color].toString();
  return (
    <button
      className={ `btn join-item btn-xs
         rounded-none ${styles}` }
      onClick={ () => (onHandleClick()) }
    >
      {title}
    </button>
  );
}
