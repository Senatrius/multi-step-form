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
    <div className='[&:not(last-of-type)]:mb-4 md:[&:not(last-of-type)]:mb-6'>
      <div className='flex items-baseline justify-between'>
        <label
          className='mb-1 text-m-small text-primary-400 md:mb-2 md:text-d-small'
          htmlFor='{inputId}'>
          {label}
        </label>
        {error && (
          <span className='mb-1 text-m-small font-bold text-error md:mb-2 md:text-d-small'>
            {error}
          </span>
        )}
      </div>
      <input
        className={`block w-full rounded-[0.25rem] border bg-transparent px-4 py-2 text-[0.9375rem] font-bold text-primary-400 outline-transparent placeholder:text-placeholder focus-within:border-primary-400 md:py-3 md:text-d-medium ${
          error ? 'border-error' : 'border-neutral'
        }`}
        id={inputId}
        type='text'
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};
