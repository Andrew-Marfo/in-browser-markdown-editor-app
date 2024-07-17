import React, { ReactNode } from 'react'

interface HeroHeaderProps {
    children: ReactNode;
}

const HeroHeader = ({children} : HeroHeaderProps) => {
  return (
    <div className='hero-header flex items-center justify-between'>{children}</div>
  )
}

export default HeroHeader