import React from 'react';
import { FlowerDivider } from './ui/FlowerDivider';

type TitleSectionProps = {
  title: string;
  hasDivider: boolean;
  subtitle?: string;
  description?: string;
  className?: string;
  children: React.JSX.Element;
};

const TitleSection = ({
  title,
  hasDivider,
  subtitle,
  description,
  className,
  children,
}: TitleSectionProps) => {
  return (
    <div
      className={`${className} flex flex-col gap-4 items-center h-full w-full  mb-20 md:mb-48`}
    >
      {title ? (
        <h2 className='font-poppins text-md md:text-3xl  px-2 py-0.5 font-bold text-center'>
          {title}
        </h2>
      ) : null}

      {hasDivider ? <FlowerDivider /> : null}

      {subtitle ? (
        <h1 className='text-center text-black text-xl md:text-2xl lg:text-3xl  xl:text-4xl'>
          {subtitle}
        </h1>
      ) : null}

      {description ? (
        <p className='text-center sm:max-w-xs text-slate-800 lowercase font-black text-base md:text-xl   shadow-slate-700 lg:w-full'>
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );
};

export default TitleSection;
