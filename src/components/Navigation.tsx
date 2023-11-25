import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-yellow-500 w-full h-16">
      <div className="w-11/12 max-w-[1500px] bg-yellow-500 mx-auto h-full flex items-center justify-between">
        <div className="">logo</div>
        <div className="flex gap-3">
          <div className="">lupa</div>
          <div className="">wiadomości</div>
          <div className="">konto</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
