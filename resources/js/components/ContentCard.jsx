import React from 'react'

function ContentCard({key}) {
  return (

<div key={key} className="rounded-[14px] image-card group  bg-[#FAFAFA] px-[14px] pt-[14px] pb-[15px]">
<div className="rounded-xl overflow-hidden max-h-[215px] card__image bg-[#E8E9EB] px-6 pt-6">
  <img
    className="w-full"
    src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/6OqrmReUhoah4lV6ExxB1670303586.png"
    alt=""
  />
</div>

<h4 className="mt-3 text-center text-lg font-bold leading-[22px] text-[#161616]">
  Ecommerce Header
</h4>
<div className="mt-4 flex items-center justify-center ">
  <button className=" btn-img-scroll bg-[#fff] relative min-w-[206px] flex justify-center cursor-pointer rounded-md py-3  text-center text-sm font-bold leading-[15px] shadow-template-card transition-all delay-100 ease-in-out  hover:transition-all">
    <svg
      className="left-[12px] absolute"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="delay-100 group-hover:fill-white"
        d="M13.9979 0.604904H10.32C7.8586 0.604904 6.58879 1.40123 6.18381 3.29696C6.014 4.0918 6.70187 4.76446 7.51464 4.76446H8.74374C12.4217 4.76446 14.1293 6.47206 14.1293 10.15V11.3791C14.1293 12.1919 14.8019 12.8797 15.5968 12.7099C17.4925 12.3049 18.2888 11.0351 18.2888 8.57373V4.89581C18.2888 1.83088 17.0628 0.604904 13.9979 0.604904Z"
        fill="#181818"
      />
      <path
        className="delay-100 group-hover:fill-white"
        d="M8.74471 5.85847H5.06679C2.00185 5.85847 0.775879 7.08445 0.775879 10.1494V13.8273C0.775879 16.8922 2.00185 18.1182 5.06679 18.1182H8.74471C11.8096 18.1182 13.0356 16.8922 13.0356 13.8273V10.1494C13.0356 7.08445 11.8096 5.85847 8.74471 5.85847ZM9.78678 10.8062L6.53795 14.055C6.41536 14.1776 6.25773 14.2389 6.09135 14.2389C5.92497 14.2389 5.76734 14.1776 5.64474 14.055L4.01595 12.4262C3.77076 12.181 3.77076 11.7869 4.01595 11.5417C4.26115 11.2965 4.65521 11.2965 4.9004 11.5417L6.08259 12.7239L8.89357 9.91294C9.13877 9.66775 9.53283 9.66775 9.77803 9.91294C10.0232 10.1581 10.032 10.561 9.78678 10.8062Z"
        fill="#181818"
      />
    </svg>

    Copy
  </button>

  <button className="ml-2 rounded-md p-3 shadow-template-card-two  bg-[#fff]">
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9841 0.746857C11.3991 0.746857 9.98058 1.54052 9.09617 2.75808C8.21176 1.54052 6.79319 0.746857 5.20825 0.746857C2.51999 0.746857 0.3396 3.00159 0.3396 5.78844C0.3396 6.8617 0.505974 7.85378 0.794941 8.77371C2.17848 13.2832 6.44293 15.9798 8.55326 16.7194C8.85099 16.8276 9.34135 16.8276 9.63908 16.7194C11.7494 15.9798 16.0139 13.2832 17.3974 8.77371C17.6864 7.85378 17.8527 6.8617 17.8527 5.78844C17.8527 3.00159 15.6724 0.746857 12.9841 0.746857Z"
        fill="#292D32"
      />
    </svg>
  </button>
</div>
</div>
  )
}

export default ContentCard

