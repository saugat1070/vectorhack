import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[radial-gradient(circle_at_20%_80%,rgba(81,60,151,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,91,150,0.15)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(74,172,211,0.1)_0%,transparent_40%)]" />
      </div>
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(74,172,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,172,211,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />
    </>
  );
};

export default Background;
