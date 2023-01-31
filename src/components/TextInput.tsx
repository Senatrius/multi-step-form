import { UseFormRegisterReturn } from 'react-hook-form';
import { TFormData } from './FormWrapper';

export const TextInput = ({
  inputId,
  label,
  placeholder,
  error,
  register
}: {
  inputId: string;
  label: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
}) => {
  return (
    <div>
      <div className='flex items-baseline justify-between'>
        <label
          className='text-m-small text-primary-400 md:text-d-small'
          htmlFor='{inputId}'>
          {label}
        </label>
        {error && <span className='text-m-small text-error'>{error}</span>}
      </div>
      <input
        className='block w-full rounded-[0.25rem] p-4 text-primary-400 placeholder:text-m-medium placeholder:text-placeholder md:placeholder:text-d-medium'
        id={inputId}
        type='text'
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};
