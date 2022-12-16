import React, { useState } from "react";
import { request } from "../Request";
import { getRecoil } from 'recoil-nexus';
import { activeButtonState, activeCategoryState } from "../state/State";

function ContentCard({ key, item }) {

  const [codeCopied, setCodeCopied] = useState(false);
  const [copying, setCopying] = useState(false)
  const [upgradePlan, setUpgradePlan] = useState(false)

  const copyToClipBoard = async () => {

    setCopying(true)

    if (item.is_pro === "true") {
      setUpgradePlan(true);
      return
    }

    const params = {}

    if(item.id){
      params.id = item.id
    }

    if(getRecoil(activeCategoryState) === "templates"){
      params.type = 'template'
    } else if(getRecoil(activeCategoryState) === "sections"){
      params.type = 'component'
    }

    const response = await request.post('api/get-code',params);

    setCopying(false)

    if(!response.code){

      console.log('no code found to copy')
      return
    }


    setCopying(false)

    function listener(evt) {
      evt.clipboardData.setData("application/json", response.code);
      evt.preventDefault();
    }

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    setCodeCopied(true)
    countCopyHandler()

  };

  const countCopyHandler = () =>  {
    let params = {}
    params.id = item.id
    let activeBtn = getRecoil(activeButtonState)
    if(activeBtn.id === 'templates')  params.type = 'template'
    else if(activeBtn.id === 'sections')  params.type = 'component'

    const response = request.post('api/product-copy-count',params);

  }

  return (
    <div
      key={key}
      className="rounded-[14px] relative image-card group  bg-[#fff] shadow-[0px_0.855451px_0.855451px_#E9E9E9] px-[14px] pt-[14px] pb-[15px]"
    >
      <div className="rounded-xl overflow-hidden max-h-[215px] card__image bg-[#E8E9EB] px-6 pt-6">
        <img className="w-full min-h-[166px]" src={item.thumbnail} alt="" />
      </div>

      <h4 className="mt-3 text-center text-lg font-bold leading-[22px] text-[#161616]">
        {item.name}
      </h4>
      <div className="mt-4 flex items-center justify-center ">
        <button
          onClick={copyToClipBoard}
          className=" btn-img-scroll bg-[#fff] relative min-w-[206px] flex justify-center cursor-pointer rounded-md py-3  text-center text-sm font-bold leading-[15px] shadow-template-card transition-all delay-100 ease-in-out  hover:transition-all border-[1px] border-solid border-[rgba(41,45,50,0.1)] shadow-[0px_1.7109px_10.2654px_-4.37302px_#FFFFFF] text-[#191919]"
        >
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

          {
            codeCopied ? "Copied" : (<>
              {
                copying ? 'Copying...' : 'copy'
              }
            </>)
          }
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
      {upgradePlan && (
        <div className="premium-access-link absolute rounded-[10px] -bottom-[10px] max-w-[200px] flex gap-[6px] p-[10px] bg-[#fff] shadow-[0px_6px_24px_rgba(94,93,240,0.15)]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4987 9.20817C8.28305 9.20565 8.0718 9.26926 7.89339 9.39043C7.71498 9.5116 7.57797 9.68452 7.50081 9.88591C7.42365 10.0873 7.41003 10.3075 7.4618 10.5169C7.51357 10.7262 7.62824 10.9147 7.79036 11.0569V12.0415C7.79036 12.2294 7.86499 12.4095 7.99783 12.5424C8.13067 12.6752 8.31084 12.7498 8.4987 12.7498C8.68656 12.7498 8.86673 12.6752 8.99957 12.5424C9.1324 12.4095 9.20703 12.2294 9.20703 12.0415V11.0569C9.36916 10.9147 9.48382 10.7262 9.53559 10.5169C9.58736 10.3075 9.57375 10.0873 9.49659 9.88591C9.41943 9.68452 9.28242 9.5116 9.10401 9.39043C8.9256 9.26926 8.71435 9.20565 8.4987 9.20817ZM12.0404 6.37484V4.95817C12.0404 4.01886 11.6672 3.11803 11.003 2.45383C10.3388 1.78964 9.43801 1.4165 8.4987 1.4165C7.55939 1.4165 6.65855 1.78964 5.99436 2.45383C5.33017 3.11803 4.95703 4.01886 4.95703 4.95817V6.37484C4.39345 6.37484 3.85294 6.59872 3.45443 6.99723C3.05591 7.39575 2.83203 7.93625 2.83203 8.49984V13.4582C2.83203 14.0218 3.05591 14.5623 3.45443 14.9608C3.85294 15.3593 4.39345 15.5832 4.95703 15.5832H12.0404C12.604 15.5832 13.1445 15.3593 13.543 14.9608C13.9415 14.5623 14.1654 14.0218 14.1654 13.4582V8.49984C14.1654 7.93625 13.9415 7.39575 13.543 6.99723C13.1445 6.59872 12.604 6.37484 12.0404 6.37484ZM6.3737 4.95817C6.3737 4.39459 6.59758 3.85408 6.9961 3.45557C7.39461 3.05705 7.93511 2.83317 8.4987 2.83317C9.06228 2.83317 9.60279 3.05705 10.0013 3.45557C10.3998 3.85408 10.6237 4.39459 10.6237 4.95817V6.37484H6.3737V4.95817ZM12.7487 13.4582C12.7487 13.646 12.6741 13.8262 12.5412 13.959C12.4084 14.0919 12.2282 14.1665 12.0404 14.1665H4.95703C4.76917 14.1665 4.589 14.0919 4.45616 13.959C4.32333 13.8262 4.2487 13.646 4.2487 13.4582V8.49984C4.2487 8.31198 4.32333 8.13181 4.45616 7.99897C4.589 7.86613 4.76917 7.7915 4.95703 7.7915H12.0404C12.2282 7.7915 12.4084 7.86613 12.5412 7.99897C12.6741 8.13181 12.7487 8.31198 12.7487 8.49984V13.4582Z"
              fill="#585858"
            />
          </svg>
          <span className="font-medium text-[12px] text-[#191919] leading-[18px]">
            Get access to all resources,{" "}
            <a target="_blank" className="text-[#5E5DF0] underline" href="https://flowgiri.com/pricing">
              upgrade
            </a>{" "}
            your plan
          </span>
        </div>
      )}

      {item.is_pro === "true" && (
        <div className="w-[63px] h-[28px] absolute bg-[#FFC555] top-[24px] z-[1000] right-[24px] flex justify-center rounded-[100px] items-center gap-[4px] ">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4987 9.20817C8.28305 9.20565 8.0718 9.26926 7.89339 9.39043C7.71498 9.5116 7.57797 9.68452 7.50081 9.88591C7.42365 10.0873 7.41003 10.3075 7.4618 10.5169C7.51357 10.7262 7.62824 10.9147 7.79036 11.0569V12.0415C7.79036 12.2294 7.86499 12.4095 7.99783 12.5424C8.13067 12.6752 8.31084 12.7498 8.4987 12.7498C8.68656 12.7498 8.86673 12.6752 8.99957 12.5424C9.1324 12.4095 9.20703 12.2294 9.20703 12.0415V11.0569C9.36916 10.9147 9.48382 10.7262 9.53559 10.5169C9.58736 10.3075 9.57375 10.0873 9.49659 9.88591C9.41943 9.68452 9.28242 9.5116 9.10401 9.39043C8.9256 9.26926 8.71435 9.20565 8.4987 9.20817ZM12.0404 6.37484V4.95817C12.0404 4.01886 11.6672 3.11803 11.003 2.45383C10.3388 1.78964 9.43801 1.4165 8.4987 1.4165C7.55939 1.4165 6.65855 1.78964 5.99436 2.45383C5.33017 3.11803 4.95703 4.01886 4.95703 4.95817V6.37484C4.39345 6.37484 3.85294 6.59872 3.45443 6.99723C3.05591 7.39575 2.83203 7.93625 2.83203 8.49984V13.4582C2.83203 14.0218 3.05591 14.5623 3.45443 14.9608C3.85294 15.3593 4.39345 15.5832 4.95703 15.5832H12.0404C12.604 15.5832 13.1445 15.3593 13.543 14.9608C13.9415 14.5623 14.1654 14.0218 14.1654 13.4582V8.49984C14.1654 7.93625 13.9415 7.39575 13.543 6.99723C13.1445 6.59872 12.604 6.37484 12.0404 6.37484ZM6.3737 4.95817C6.3737 4.39459 6.59758 3.85408 6.9961 3.45557C7.39461 3.05705 7.93511 2.83317 8.4987 2.83317C9.06228 2.83317 9.60279 3.05705 10.0013 3.45557C10.3998 3.85408 10.6237 4.39459 10.6237 4.95817V6.37484H6.3737V4.95817ZM12.7487 13.4582C12.7487 13.646 12.6741 13.8262 12.5412 13.959C12.4084 14.0919 12.2282 14.1665 12.0404 14.1665H4.95703C4.76917 14.1665 4.589 14.0919 4.45616 13.959C4.32333 13.8262 4.2487 13.646 4.2487 13.4582V8.49984C4.2487 8.31198 4.32333 8.13181 4.45616 7.99897C4.589 7.86613 4.76917 7.7915 4.95703 7.7915H12.0404C12.2282 7.7915 12.4084 7.86613 12.5412 7.99897C12.6741 8.13181 12.7487 8.31198 12.7487 8.49984V13.4582Z"
              fill="#585858"
            />
          </svg>

          <span className="font-bold text-[12px] leading-[12px] text-[#160042]">
            PRO
          </span>
        </div>
      )}
    </div>
  );
}

export default ContentCard;
