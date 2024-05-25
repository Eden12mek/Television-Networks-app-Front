import React from 'react';

const Logout = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-7 text-3xl font-semibold text-black aspect-w-4 aspect-h-5 max-w-[331px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd0117dab71308f961a3dd081616b09a31002bb4b59dc5353cd1ff524456727e?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
        className="object-cover w-full h-full absolute inset-0"
        alt="Background"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2fbd95545c8cef74d880fa1e03c45dce40043e950ad1ea082b5c0bb49e5c45f?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
        className="w-[101px] h-[100px] max-w-full border-2 border-black border-solid stroke-2 stroke-black"
        alt="Logo"
      />
      <div className="mt-4 text-base">User Name</div>
      <div className="mt-1.5 text-base">admin@gmail.com</div>
      <div className="self-stretch mt-24 w-full border-2 border-solid bg-black bg-opacity-70 border-black border-opacity-70 min-h-[2px]" />
      <div className="mt-6 font-bold text-red-600 uppercase">
        Logout
      </div>
    </div>
  );
};

export default Logout;
