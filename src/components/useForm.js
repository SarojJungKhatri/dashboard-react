import {useState, useEffect} from 'react';

const useForm = ()=>{
   
        const [values, setValues] = useState({
            username: '',
            email: '',
            password: '',
            password2: ''
          });
    const [error, setError]= useState({});



    const handleChange = e => {
        const { name, values} =e.target
        setValues({
          ...values,
          [name]:values  
        });
    };
    const handleSubmit= e=> {
        e.preventDefault();
    };
    return {handleChange, values, handleSubmit};
};
export default useForm;