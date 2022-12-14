import React from 'react'

function EmptyElements() {
  return (
    <div className='w-[500px] bg-[#f5f5f5] flex justify-center items-center h-[80%] '>
    <div className="empty-box flex flex-col items-center">
    <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="64.000000pt"
        height="64.000000pt"
        viewBox="0 0 64.000000 64.000000"
        preserveAspectRatio="xMidYMid meet"
    >
        <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
        >
            <path
                d="M225 479 c-44 -16 -99 -36 -122 -45 -34 -12 -48 -26 -72 -69 -17 -30
                                  -31 -59 -31 -65 0 -6 13 -16 30 -21 29 -11 29 -11 32 -101 l3 -90 127 -45 128
                                  -45 128 45 127 45 3 90 c3 90 3 90 32 101 17 5 30 15 30 22 0 9 -52 102 -66
                                  117 -5 7 -246 92 -258 91 -6 0 -47 -13 -91 -30z m62 -169 c1 0 -6 -13 -15 -30
                                  -9 -16 -21 -30 -27 -30 -5 0 -51 15 -102 33 l-92 33 19 32 20 32 97 -35 c54
                                  -19 99 -35 100 -35z m281 38 l21 -33 -92 -32 c-51 -18 -96 -32 -102 -33 -5 0
                                  -17 13 -27 29 l-16 29 96 36 c54 19 98 35 99 35 0 1 10 -14 21 -31z m-220
                                  -113 c12 -19 26 -35 31 -35 6 0 41 11 79 25 38 14 72 25 76 25 4 0 6 -30 4
                                  -66 l-3 -66 -95 -34 c-52 -19 -96 -34 -97 -34 -2 0 -3 29 -3 65 0 58 -2 65
                                  -20 65 -18 0 -20 -7 -20 -65 0 -36 -1 -65 -2 -65 -2 1 -46 16 -98 34 l-95 33
                                  -3 67 c-2 36 0 66 4 66 4 0 38 -11 76 -25 38 -14 73 -25 79 -25 5 0 19 16 31
                                  35 13 19 25 35 28 35 3 0 15 -16 28 -35z"
            />
        </g>
    </svg>
    <span className='font-bold text-[30px] leading-[55px]'>No items</span>
</div>
    </div>

  )
}

export default EmptyElements
