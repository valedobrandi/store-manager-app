import { useState } from "react";

export default function useFormState() {
    const [form, setForm] = useState({
        name: '',
        id: ''
    });

    return { form, setForm }
}