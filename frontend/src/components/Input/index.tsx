type InputProps = {
  setInput: React.Dispatch<React.SetStateAction<{ name: string; id: string; }>>;
  input: {
    name: string;
    id: string;
  };
  width?: string;
  name: 'id' | 'name';

};

export default function Input({ setInput, input, width = 'max-w-96', name }: InputProps) {
  return (
    <input
      className={`input
        input-bordered
        join-item
        text-black
        text-center
        ${width}
        [appearance:textfield]
        h-[3.1rem]`}
      name={name}
      onChange={({ target }) => setInput({ ...input, [name]: target.value })}
      value={input[name]}
    />
  );
}

