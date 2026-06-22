import React from 'react'

function BackToTop() {

    const ScrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className='bg-gray-700 text-white flex items-center justify-center h-10 cursor-pointer' onClick={ScrollToTop}>
        Back To Top
    </div>
  )
}

export default BackToTop