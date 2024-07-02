import useFormState from '../../Hooks/useFormState';
import FetchButton from '../FetchButton';
import Input from '../Input';
import Label from '../Label';

type RegisterBarPops = {
  usefetchLazyData: (query: { name: string, id: string }) => void
};

export default function RegisterBar({ usefetchLazyData }: RegisterBarPops) {
  const { form, setForm } = useFormState();
  return (
    <div className="m-4">
      <Label title="NAME">
        <Input name='name' setInput={setForm} input={form} key="register" />
      </Label>
      <FetchButton title="CREATE" input={form} usefetchLazyData={usefetchLazyData} />
    </div>
  );
}
