import React, { useEffect, useState } from 'react'
import { NavigationsButtons } from '../data/data.js'

function Filter() {

    const [activeButton, setActiveButton] = useState( {
        id:'templates',
        name:'Templates',
        left:'4px'
    })

    const selectTab = (item) => {
        setActiveButton(item)
    }

    useEffect(()=>{
        const activeBtn = document.getElementById('active-button')

        activeBtn.style.left = activeButton.left

    },[activeButton])


    return (
        <div className='w-full py-[28px] px-[20px] flex justify-between items-center'>
            <div className='btns  relative rounded-[42px] bg-[#fff] flex justify-between h-[44px] shadow-[0px_1.7109px_1.7109px_#E9E9E9]'>
                <button id='active-button'  className='w-[100px] transition-[left] duration-300 absolute left-[4px] bg-[#5E5DF0] rounded-[42px] top-[3px] h-[38px]'>

                </button>

                {
                    Object.keys(NavigationsButtons).map((item, i) => {
                        return (
                            <button key={i} onClick={() => selectTab(NavigationsButtons[item])} style={{color: NavigationsButtons[item].id == activeButton.id? 'white':''}} className='w-[104px] h-full flex z-[200] justify-center items-center font-bold text-[14px] leading-[12px]'>
                            {NavigationsButtons[item].name}
                        </button>
                        )
                    })
                }




            </div>
            <div className='searchbar w-[241px] h-[44px] relative shadow-[0px_1.7109px_1.7109px_#E9E9E9] rounded-[42px]'>
                <img src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/v1mcIe7iYXd80obyy2mq1670497753.svg" className='absolute top-[13px] left-[13px]' alt="" />
                <input className='text-[400] pl-[40px] rounded-[42px] h-full w-full text-[16px] leading-[19px] text-[#6D6E6F] outline-none border-none ' type="text" />

            </div>
            <div className='switch flex gap-[13px]'>
                <p>Free</p>
                <div className="flex justify-center">
                    <div className="form-check form-switch">
                        <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault"></label>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Filter