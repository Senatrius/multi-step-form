import { StepIndicator } from './StepIndicator';

export const Stepper = ({ currStep }: { currStep: number }) => {
  return (
    <section className='grid w-full place-items-center bg-[url("./images/bg-sidebar-mobile.svg")] bg-cover bg-no-repeat pt-8 pb-[6.75rem] md:bg-[url("./images/bg-sidebar-desktop.svg")]'>
      <ul className='flex items-center gap-4'>
        {[1, 2, 3, 4].map(item => (
          <li key={item}>
            <StepIndicator
              step={item}
              current={currStep === item}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
