import React from 'react'

const MainHome = () => {
  return (
    <div className="flex-1 h-[100vh] px-[10%] flex justify-between flex-col bg-[#E6FCED]">
        <div className='mt-12'>
            <h1 className='text-[#212529] text-8xl font-semibold'>Administrator</h1>
            <p className=' text-xl text-[#83858B] mt-5'>As the administrator of a music school, I will need to be able to create courses, view enrolments and review analytics for the entire school. I should also be able to see a cumulative view of all students in the school regardless of the course. Only I should be able to access this data through a username and password.</p>
        </div>
        <div className='mb-6'>
            <p className='text-[#83858B] text-sm mb-1'>Author : Glenn Fernandes</p>
            <p className='text-[#83858B] text-sm'>Last Update : 22-08-2023</p>
        </div>
    </div>
  )
}

export default MainHome