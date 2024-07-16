import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex items-center'>
      <div className='nav-details flex items-center'>
        <button className='hamburger'>
          <Image src="/assets/icon-menu.svg" alt='hamburger' width={20} height={10}/>
        </button>
        <p>markdown</p>
        <div className='nav-doc-name flex items-center'>
          <div>
            <Image src="/assets/icon-document.svg" alt='link' width={10} height={13}/>
          </div>
          <div>
            <p>doc name</p>
            <p>name</p>
          </div>
        </div>
      </div>
      
      <div className='nav-action-buttons flex items-center'>
        <button className='delete-btn'>
        <Image src="/assets/icon-delete.svg" alt='link' width={10} height={13}/>
        </button>
        <button className='save-btn flex items-center'>
        <Image src="/assets/icon-save.svg" alt='link' width={10} height={13}/>
           save</button>
      </div>
    </div>
  )
}

export default Navbar