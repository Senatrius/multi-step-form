import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TFormData } from './FormWrapper';
import { TextInput } from './TextInput';

export const PersonalInfo = ({
  register,
  errors
}: {
  register: UseFormRegister<TFormData>;
  errors?: FieldErrors<TFormData>;
}) => {
  return (
    <>
      <h1 className='mb-3 text-m-title font-bold text-primary-400 md:text-d-title'>
        Personal Info
      </h1>
      <p className='mb-5 text-paragraph text-placeholder md:mb-9'>
        Please provide your name, email address, and phone number
      </p>
      <TextInput
        inputId='name'
        label='Name'
        placeholder='e.g. Stephen King'
        error={errors?.name?.message}
        register={register('name')}
      />
      <TextInput
        inputId='email'
        label='Email Address'
        placeholder='e.g. stephenking@lorem.com'
        error={errors?.email?.message}
        register={register('email')}
      />
      <TextInput
        inputId='phone'
        label='Phone Number'
        placeholder='e.g. +1 234 567 890'
        error={errors?.phone?.message}
        register={register('phone')}
      />
    </>
  );
};
