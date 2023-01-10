// Context api
import { useContext } from 'react';
import { GlobalContext } from 'context/global';

// Form
import { useForm } from "react-hook-form";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ItemForm() {
  const { todoList, addTodo } = useContext(GlobalContext);

  const { register, handleSubmit, /* watch, */ formState: { errors }, setValue } = useForm();
  const onSubmit = (data: any) => {
    addTodo({ ...data, id: todoList.length + 1 })
    setValue("description", undefined);
  }

  // console.log(watch("description")); // watch input value by passing the name of it
  return (
    <form className="form">
      <section className="fields-section">
        <div>
          <input defaultValue="" {...register("description", { required: true })} />
          {errors.description && <p className="form-error">This field is required</p>}
        </div>
        <button className='submit-button' onClick={handleSubmit(onSubmit)}>
          <FontAwesomeIcon icon="plus" />
        </button>
      </section>
    </form>
  );
}

export default ItemForm;