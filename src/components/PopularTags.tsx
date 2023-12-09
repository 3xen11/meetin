import React from 'react';

type darkModeType = {
  darkMode: boolean;
};

const PopularTags: React.FC<darkModeType> = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? 'bg-[#353535]' : 'bg-[#e4e4e4]'
      } w-full h-fit hidden lg:block  mt-5 flex-col`}
    >
      <div
        className={`${
          darkMode ? 'border-[#fff]' : 'border-[#4b4b4b]'
        } text-center border-b-2 h-12 flex items-center justify-center`}
      >
        <p className={`${darkMode ? 'text-white' : ''} text-xl font-bold`}>
          Popularne tagi
        </p>
      </div>
      <div className=" flex gap-3 flex-wrap p-4 overflow-hidden">
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #góry
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #morze
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #koncert
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #turcja
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #malta
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #włochy
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #sport
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #piłka_nożna
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #standup
        </p>
        <p
          className={` ${
            darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white'
          }  p-2 hover:scale-105 active:scale-100 transition-all cursor-pointer`}
        >
          #klub
        </p>
      </div>
    </div>
  );
};

export default PopularTags;
