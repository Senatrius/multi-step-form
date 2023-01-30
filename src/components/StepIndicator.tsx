interface IStep {
  step: number;
  current?: boolean;
}

export const StepIndicator = ({ step, current }: IStep) => {
  return (
    <div
      className={`grid h-8 w-8 place-items-center rounded-full border-2 border-white text-step-number text-primary-400 ${
        current ? 'bg-neutral text-primary-400' : 'bg-transparent text-white'
      }`}>
      {step}
    </div>
  );
};
