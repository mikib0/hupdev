import React, { useState } from 'react'

const ProjectsFilter = () => {
  const [active, setActive] = useState('design')
  return (
    <div className='flex items-center justify-between px-2 py-2 bg-gray-light w-full overflow-x-scroll md:overflow-x-hidden md:px-dx'>
      {['all', 'engineering', 'design', 'strategy', 'campaigns', 'maintenance']. map(item=> <button className={`capitalize px-6 py-2 md:px-16 md:py-4 ${active != item ? 'text-white': 'text-black bg-orange'}`}>{item}</button>)}
    </div>
  )
}

export default ProjectsFilter