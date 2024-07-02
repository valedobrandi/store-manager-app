import useFormState from '../../Hooks/useFormState';
import FetchButton from '../FetchButton';
import Input from '../Input';
import Label from '../Label';

type BarUpdatePops = {
    usefetchLazyData: (query: { name: string, id: string }) => void
};


export default function BarUpdate({ usefetchLazyData }: BarUpdatePops) {
    const { form, setForm } = useFormState()

    return (
        <div className="m-4">
            <Label title='ID'>
                <Input name='id' width='max-w-20' setInput={setForm} input={form} key="updateId" />
            </Label>
            <Label title='NAME'>
                <Input name='name' setInput={setForm} input={form} key="updateName" />
            </Label>
            <FetchButton title="UPDATE" input={form} usefetchLazyData={usefetchLazyData} />
        </div>
    );
}