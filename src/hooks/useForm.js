import { useState } from 'react';

const useForm = (initialValue = {}) => {

    const [values, setValues] = useState(initialValue);

    const resetValue = () => setValues(initialValue);

    const handleInputValue = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value,
        });

    };

    return [values, handleInputValue, resetValue];
}

export default useForm
