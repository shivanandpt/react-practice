import { useForm } from "react-hook-form";

const TestForm = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch('gender'));
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')}></input>
            <select {...register('gender')}>
                <option value="female"> Female</option>
                <option value="male">Male </option>
            </select>
            <input type="submit"  />
        </form>
     );
}

export default TestForm;