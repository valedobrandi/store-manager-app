type SelectTypeProps = {
  options: string[]
};

export default function Select({ options }: SelectTypeProps) {
  return (
    <select className="select select-info w-full max-w-xs">
      {options.map((option) => (
        <option key={ option }>{option}</option>
      ))}
    </select>
  );
}
