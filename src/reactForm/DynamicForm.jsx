import { useFieldArray, useForm } from "react-hook-form";

const DynamicForm = () => {
    const { control, handleSubmit, watch, register } = useForm({
        defaultValues: {
            items: [{ color: 'Red', quantity: 1, size: 'M' }, { color: 'Red', quantity: 1, size: 'M' }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h3>Dynamic form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    fields.map((field, index) => { 
                        console.log("field", field, index);
                        return(
                        <div key={field.id} >
                            <h3>Item ${index}</h3>
                            <div>
                                <label> Color</label>
                                <input {...register(`items.${index}.color`, )}  defaultValue={field.color} />
                            </div>
                            <div>
                                <label >Quantity</label>
                                <input type="number"  {...register(`items.${index}.quantity`)} />
                            </div>
                            <div>
                                <label >Size</label>
                                <select {...register(`items.${index}.size`)} defaultValue={field.size}>
                                    <option value="S">Small</option>
                                    <option value="M">Medium</option>
                                    <option value="L">Large</option>
                                </select>
                            </div>
                            <button type="button" onClick={() => remove(index)}>
                                Remove Item
                            </button>
                        </div>

                    )
                })

                }
                <button type="button" onClick={() => append({ color: '', quantity: 1, size: 'M' })}>
                    Add Item
                </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default DynamicForm;