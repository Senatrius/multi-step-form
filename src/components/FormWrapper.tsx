import React, { SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PersonalInfo } from './PersonalInfo';

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  addons: [],
  term: ''
};

export type TFormData = typeof defaultValues;

const formSchema = z.object({
  name: z.string().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email address' }),
  phone: z
    .string()
    .min(1, { message: 'This field is required' })
    .startsWith('+', { message: "Must start with '+' symbol" })
});

export const FormWrapper = ({
  currStep,
  setCurrStep
}: {
  currStep: number;
  setCurrStep: React.Dispatch<SetStateAction<number>>;
}) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<TFormData>({
    defaultValues: defaultValues,
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<TFormData> = data => {
    console.log(data);
    setCurrStep(prev => prev + 1);
  };

  const next = async () => {
    const isValid = await trigger(['name', 'email', 'phone']);
    isValid && setCurrStep(prev => prev + 1);
  };

  return (
    <main className='flex grow flex-col'>
      <form
        id='form'
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto -mt-[4.5rem] mb-8 w-[91.5%] rounded-lg bg-component py-8 px-6 shadow-lg'>
        {(() => {
          switch (currStep) {
            case 1:
              return (
                <PersonalInfo
                  register={register}
                  errors={errors}
                />
              );
          }
        })()}
      </form>
      <footer className='mt-auto w-full bg-component py-4'>
        <div className='mx-auto flex w-[91.5%] items-center'>
          {currStep > 1 && (
            <button
              onClick={() => setCurrStep(prev => prev - 1)}
              className='text-m-medium font-medium text-placeholder md:text-d-medium'>
              Go Back
            </button>
          )}
          {currStep === 4 && (
            <button
              form='form'
              className='text-m-medium ml-auto rounded-[0.25rem] bg-primary-400 px-4 py-3 font-medium text-white hover:bg-primary-300 focus:bg-primary-300 md:rounded-lg md:px-6 md:py-4 md:text-d-medium'>
              Confirm
            </button>
          )}
          {currStep < 4 && (
            <button
              onClick={next}
              className='text-m-medium ml-auto rounded-[0.25rem] bg-primary-400 px-4 py-3 font-medium text-white hover:bg-primary-300 focus:bg-primary-300 md:rounded-lg md:px-6 md:py-4 md:text-d-medium'>
              Next Step
            </button>
          )}
        </div>
      </footer>
    </main>
  );
};
