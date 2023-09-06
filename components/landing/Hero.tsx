import React from 'react';

type Props = {};

const pink_gradiant =
  'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]';
const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]';
const blue_gradiant =
  'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]';
const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900';
const text_gradient =
  ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text';

const Hero = (props: Props) => {
  return (
    <section className='relative w-full h-full'>
      <div>left</div>
      <div>
        {/* gradient start */}
        <div
          className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `}
        />
        <div
          className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} bottom-40`}
        />
        <div
          className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`}
        />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
