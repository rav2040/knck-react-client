import React from 'react';

export default function Title() {
  return (
    <div className="d-inline-flex align-items-center">
      <svg viewBox="0 0 512 512" width="80px" height="80px">
        <path d="M501.24,180.858L331.137,10.755c-14.327-14.327-37.636-14.327-51.963,0l-89.869,89.869c-14.327,14.327-14.327,37.637,0,51.964l54.038,54.039L227.7,222.27l-8.997,8.997l62.026,62.025l24.64-24.64l54.039,54.039c6.938,6.94,16.167,10.762,25.982,10.762c9.813,0,19.042-3.822,25.982-10.762l89.869-89.869c6.94-6.939,10.763-16.167,10.763-25.983S508.179,187.797,501.24,180.858z" />
        <rect x="-9.889" y="338.376" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -232.2751 203.7074)" width="279.296" height="87.717" />
      </svg>
      <h1 id="title">knck</h1>
    </div>
  );
}
