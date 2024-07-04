import useFormState from '../../Hooks/useFormState';
import FetchButton from '../FetchButton';
import Input from '../Input';
import Label from '../Label';

type BarDeletePops = {
  usefetchLazyData: (query: { name: string, id: string }) => void
};

export default function BarDelete({ usefetchLazyData }: BarDeletePops) {
  const { productForm, updateProductForm } = useFormState();
  return (
    <div className="m-4">
      <Label title="ID">
        <Input
          width="max-w-20"
          name="id"
          setInput={ updateProductForm }
          input={ productForm }
          key="register"
        />
      </Label>
      <FetchButton
        title="DELETE"
        input={ productForm }
        usefetchLazyData={ usefetchLazyData }
      />
    </div>
  );
}
