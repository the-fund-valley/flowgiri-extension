import React from 'react'
import { AuthState } from "../state/State";
import { getRecoil } from 'recoil-nexus';
function Navbar() {
    const authUser = getRecoil(AuthState);
    let token = localStorage.getItem('browserToken');
    return (
        <nav class="bg-[#212121] px-2 sm:px-4 py-2.5 dark:bg-gray-900 max-w-[833px]  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="container flex items-center justify-between mx-auto">
                <div className='flex'>
                    <a href="https://flowgiri.com" class="flex items-center text-[19px] leading-[12px] font-[900] text-[#fff]">
                        Flowgiri

                    </a>
                    <ul class=" flex ml-[80px] gap-[30px]">
                        <li>
                            {/* <a href="#" class="font-bold text-[14px] leading-[12px] text-[#FFFFFF] opacity-50" >Resources</a> */}
                        </li>
                        <li>
                            {/* <a href="#" class="font-bold text-[14px] leading-[12px] text-[#FFFFFF] opacity-50">Tutorials</a> */}
                        </li>

                    </ul>
                </div>

                <div class="flex gap-[30px] items-center justify-center">

                    <a target='_blank' href="https://flowgiri.com/pricing" class="font-bold text-[14px] leading-[12px] text-[#FFFFFF] opacity-50" >
                        Pricing
                    </a>
                    { authUser ? 
                        <span>User</span>
                    : <a target='_blank'  href={'http://127.0.0.1:8000/login?token=' + token} className='py-[6px] text-[#fff] px-[20px] shadow-[0px-4px_20px_-10px_#6E79D6] rounded-[999px] bg-[#5E5DF0]' >
                        Login 
                      </a> }
                    

                    {/* <div className='py-[6px] px-[15px]  bg-[#FFC555] flex gap-[8px] justify-center items-center rounded-[100px]'>
                        <a href="" className='font-bold text-[14px] leading-[22px]  '>
                        Upgrade
                        </a>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1956 3.85545C13.0391 3.72453 12.8489 3.64024 12.6468 3.6122C12.4447 3.58416 12.2388 3.61349 12.0526 3.69686L9.47136 4.84529L7.95652 2.12186C7.86193 1.9509 7.72328 1.80841 7.55498 1.70918C7.38667 1.60995 7.19486 1.55762 6.99949 1.55762C6.80411 1.55762 6.6123 1.60995 6.444 1.70918C6.2757 1.80841 6.13704 1.9509 6.04246 2.12186L4.52761 4.84529L1.94636 3.69686C1.76057 3.61207 1.55468 3.58127 1.35221 3.60798C1.14974 3.63468 0.958873 3.71782 0.801425 3.84789C0.643978 3.97795 0.526305 4.1497 0.461859 4.34348C0.397412 4.53727 0.388794 4.74528 0.436988 4.94373L1.82605 10.8719C1.88389 11.1124 2.02117 11.3263 2.21568 11.4792C2.41019 11.632 2.65056 11.7147 2.89793 11.714C2.99613 11.7133 3.09372 11.6986 3.18777 11.6703C5.68083 10.9848 8.31268 10.9848 10.8057 11.6703C10.9476 11.7105 11.0961 11.7215 11.2424 11.7028C11.3887 11.6841 11.5296 11.636 11.6568 11.5614C11.784 11.4868 11.8948 11.3873 11.9826 11.2688C12.0703 11.1503 12.1332 11.0153 12.1675 10.8719L13.562 4.94373C13.6091 4.74623 13.5997 4.53945 13.5349 4.34702C13.4701 4.15459 13.3525 3.98425 13.1956 3.85545ZM10.9425 10.3469C8.35662 9.67597 5.64236 9.67597 3.05652 10.3469L1.81511 5.07498L4.17761 6.12498C4.42735 6.23701 4.71014 6.25082 4.9696 6.16366C5.22907 6.07649 5.44616 5.89476 5.57761 5.65467L6.99949 3.10076L8.42136 5.65467C8.55281 5.89476 8.76991 6.07649 9.02937 6.16366C9.28884 6.25082 9.57162 6.23701 9.82136 6.12498L12.1839 5.07498L10.9425 10.3469Z" fill="#160042"/>
                        </svg>


                    </div>

                    <div>
                        <img className='w-[35px] h-[35px] rounded-[50%]' src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/laUQBqylfrZC3O9jlUOy1670496214.png" alt="" />
                    </div> */}


                </div>


            </div>
        </nav>

    )
}

export default Navbar