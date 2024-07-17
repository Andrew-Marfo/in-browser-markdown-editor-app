import React from 'react'
import HeroHeader from './hero_header'
import Image from 'next/image'

const  Preview=() =>{
  return (
    <div className='preview'>
        <HeroHeader>
            <p>preview</p>
            <Image src={"/assets/icon-show-preview.svg"} alt='show preview' width={13} height={13}/>
        </HeroHeader>
        <p>preview</p>
    </div>
  )
}

export default Preview