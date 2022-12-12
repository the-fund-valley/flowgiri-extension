import React, { useCallback, useEffect, useState } from 'react'
import { NavigationsButtons } from '../data/data.js'
import { useRecoilState } from 'recoil';
import { activeButtonState, activeCategoryState, contentFreeState, searchKeywordState } from '../state/State.js';
import { debounce } from '../helper/helper.js';
import { getSearchData } from '../Request/api.js';

function Filter() {

    const [activeButton, setActiveButton] = useRecoilState(activeButtonState)
    const [contentFree, setContentFree] = useRecoilState(contentFreeState);

    const [activeCategory, setActiveCategory] = useRecoilState(activeCategoryState);

    const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState)

    const searchContent = useCallback(debounce(getSearchData), []);

    const searchHandler = (text) => {
        setSearchKeyword(text)
        searchContent()
    }

    // theme_id, is_pro, category_id, str

    const selectTab = (item) => {
        setActiveButton(item)
    }

    useEffect(()=>{

        const activeBtn = document.getElementById('active-button')

        activeBtn.style.left = activeButton.left

        setActiveCategory(activeButton.id)

    },[activeButton])



    const toggleFreeAndPro = () => {
        setContentFree(!contentFree)
        getSearchData()
    }


    return (
        <div className='w-full py-[28px] px-[20px] flex justify-between items-center'>
            <div className='btns  relative w-[295px] px-[10px] rounded-[42px] bg-[#fff] flex justify-between h-[44px] shadow-[0px_1.7109px_1.7109px_#E9E9E9]'>
                <button id='active-button'  className='w-[100px] transition-[left] duration-300 absolute left-[4px] bg-[#5E5DF0] rounded-[42px] top-[3px] h-[38px]'>

                </button>

                {
                    Object.keys(NavigationsButtons).map((item, i) => {
                        return (
                            <button key={i} onClick={() => selectTab(NavigationsButtons[item])} style={{color: NavigationsButtons[item].id == activeButton.id? 'white':''}} className='h-full flex z-[200] w-[100px] justify-center text-[#000] items-center font-bold text-[14px] leading-[12px]'>
                            {NavigationsButtons[item].name}
                        </button>
                        )
                    })
                }

            </div>
            <div className='searchbar w-[241px] h-[44px] relative shadow-[0px_1.7109px_1.7109px_#E9E9E9] rounded-[42px]'>
                <img src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/v1mcIe7iYXd80obyy2mq1670497753.svg" className='absolute top-[13px] left-[13px]' alt="" />
                <input value={searchKeyword} onChange={ (e) => searchHandler(e.target.value) } className='text-[400] pl-[40px] rounded-[42px] h-full w-full text-[16px] leading-[19px] text-[#6D6E6F] outline-none border-none ' type="text" />

            </div>
            <div className='switch flex gap-[13px] '>

                <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={contentFree}
                        readOnly
                    />
                    <div
                        onClick={toggleFreeAndPro}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                    <span className="ml-2 text-[#191919] text-[14px] leading-[12px]">
                        Free
                    </span>
                </label>
            </div>

            </div>

        </div>
    )
}

export default Filter