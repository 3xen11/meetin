import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <div>O TO TUTAJ NIE WIEM JAK SOBIE UŁOŻYĆ, HELP ME</div>
      <Image
        src="/cat.jpg"
        alt="koteł"
        width={600}
        height={500}
        className="w-60 h-60 "
      />
    </div>
  );
};

export default page;
