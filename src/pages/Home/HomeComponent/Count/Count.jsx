// import React from 'react'
import "./Count.scss";

const Count = () => {
  return (
    <div className="Count">
      <div className="p-3 bg-black rounded-full">
        <div className="flex justify-around gap-1">
          {/* project */}
          <div className="box">
            <h2 className="num">1000</h2>
            <p className="text">project</p>
          </div>
          {/* project */}
          <div className="box">
            <h2 className="num">1000</h2>
            <p className="text">project</p>
          </div>
          {/* project */}
          <div className="box">
            <h2 className="num">1000</h2>
            <p className="text">project</p>
          </div>
          {/* project */}
          <div className="box">
            <h2 className="num">1000</h2>
            <p className="text">project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
