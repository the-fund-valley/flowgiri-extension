import React from 'react'

function SkeletonCard({i}) {
  return (
    <div key={i} className="card-flowgiri">
    <div className="card__image-flowgiri"></div>
    <div className="card__content-flowgiri">
      <h2 className='h2-flowgiri'></h2>
      <span className='span-flowgiri'></span>
    </div>
  </div>
  )
}

export default SkeletonCard

