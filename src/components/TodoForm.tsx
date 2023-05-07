import React from "react";
import { useRef } from "react";

function TodoForm() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form className='row mb-3'>
        <div className='col'>
          <input
            ref={ref}
            type='text'
            className='form-control'
            placeholder='Enter email'
          />
        </div>

        <div className='col'>
          <button className='btn btn-primary' type='button'>
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
