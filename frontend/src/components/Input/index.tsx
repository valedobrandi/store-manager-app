type InputProps = {
  state: { input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>
  }
};

export default function Input({ state }:InputProps) {
  return (
    <input
      className="input
        input-bordered
        join-item
        text-black
        text-center
        max-w-96
        [appearance:textfield]
        h-[3.1rem]"
      onChange={ ({ target }) => state.setInput((target as HTMLInputElement).value) }
      value={ state.input }
    />
  );
}
