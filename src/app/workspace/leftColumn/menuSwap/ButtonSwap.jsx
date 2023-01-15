import React from 'react';
import ContainerAtwSwap from './ContainerAtwSwap';

import "./сontainerAtwSwap.scss"

function ButtonSwap() {
  const [swap, setSwap] = React.useState(false);

  return (
    <div id="columnSwap" className={swap ? 'column_swap' : 'column_swap-active column_swap'}>
      {/* кнопка открывающая всплывающее меню */}
      <button
        onClick={() => setSwap(!swap)}
        className={swap? 'btn-swap' : 'btn_swap-active btn-swap'}
        id="btnSwap">
        <svg
          className={swap ? 'svg_swap-active' : 'svg_swap-active svg-swap'}
          width="28"
          height="23"
          viewBox="0 0 28 23"
          fill="none"
          id="svgSwapPointer"
        >
          <path
            className='svg_swap-pointer'
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.56066 0.43934L12.1066 9.98528C12.6924 10.5711 12.6924 11.5208 12.1066 12.1066L2.56066 21.6525C1.97487 22.2383 1.02513 22.2383 0.43934 21.6525C-0.146447 21.0668 -0.146447 20.117 0.43934 19.5312L8.92462 11.0459L0.43934 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.43934 0.43934C1.02513 -0.146447 1.97487 -0.146447 2.56066 0.43934ZM10.5607 0.43934L20.1066 9.98528C20.6924 10.5711 20.6924 11.5208 20.1066 12.1066L10.5607 21.6525C9.97487 22.2383 9.02513 22.2383 8.43934 21.6525C7.85355 21.0668 7.85355 20.117 8.43934 19.5312L16.9246 11.0459L8.43934 2.56066C7.85355 1.97487 7.85355 1.02513 8.43934 0.43934C9.02513 -0.146447 9.97487 -0.146447 10.5607 0.43934ZM27.1066 9.98528L17.5607 0.43934C16.9749 -0.146447 16.0251 -0.146447 15.4393 0.43934C14.8536 1.02513 14.8536 1.97487 15.4393 2.56066L23.9246 11.0459L15.4393 19.5312C14.8536 20.117 14.8536 21.0668 15.4393 21.6525C16.0251 22.2383 16.9749 22.2383 17.5607 21.6525L27.1066 12.1066C27.6924 11.5208 27.6924 10.5711 27.1066 9.98528Z"
            fill="white"
          />
        </svg>
      </button>
      {/* контейнер с кнопками и всплывающем меню */}
      <div className={swap? 'button_swap__container-active' : 'button_swap__container-active button_swap__container-none'}>
        <ContainerAtwSwap />
      </div>
    </div>
  );
}

export default ButtonSwap;
