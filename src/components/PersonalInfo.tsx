import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TFormData } from './FormWrapper';
import { Paragraph } from './Paragraph';
import { TextInput } from './TextInput';
import { Title } from './Title';

export const PersonalInfo = ({
  register,
  errors
}: {
  register: UseFormRegister<TFormData>;
  errors?: FieldErrors<TFormData>;
}) => {
  return (
    <>
      <Title value='Personal info' />
      <Paragraph value='Please provide your name, email address, and phone number' />
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
