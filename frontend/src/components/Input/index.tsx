type InputProps = {
  setInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: {
    [key: string]: string | undefined;
    name?: string;
    id?: string;
    productId?: string;
    quantity?: string;
  };
  width?: string;
  name: string;

};

export default function Input({ setInput, input, width = 'max-w-96', name }: InputProps) {
  return (
    <input
      className={ `input
        input-bordered
        join-item
        text-black
        text-center
        ${width}
        [appearance:textfield]
        h-[3.1rem]` }
      name={ name }
      onChange={ (event) => setInput(event) }
      value={ input[name] }
    />
  );
}