import useFormState from '../../Hooks/useFormState';
import FetchButton from '../FetchButton';
import Input from '../Input';
import Label from '../Label';

type BarUpdatePops = {
  usefetchLazyData: (query: { name: string, id: string }) => void
};

export default function BarUpdate({ usefetchLazyData }: BarUpdatePops) {
  const { productForm, updateProductForm } = useFormState();

  return (
    <div className="m-4">
      <Label title="ID">
        <Input
          name="id"
          width="max-w-20"
          setInput={ updateProductForm }
          input={ productForm }
          key="updateId"
        />
      </Label>
      <Label title="NAME">
        <Input
          name="name"
          setInput={ updateProductForm }
          input={ productForm }
          key="updateName"
        />
      </Label>
      <FetchButton
        title="UPDATE"
        input={ productForm }
        usefetchLazyData={ usefetchLazyData }
      />
    </div>
  );
}
