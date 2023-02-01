import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export const RadioInput = ({
  label,
  register,
  checked
}: {
  label: string;
  register: UseFormRegisterReturn;
  checked?: boolean;
}) => {
  return (
    <div>
      <input
        id={label}
        className='peer sr-only'
        type='radio'
        value={label}
        defaultChecked={checked}
        {...register}
      />
      <label
        htmlFor={label}
        className='block rounded-lg bg-error p-4 peer-checked:bg-primary-300'>
        {label}
      </label>
    </div>
  );
};
