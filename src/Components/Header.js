import React from 'react'

export const Header = ({heading, subHeading}) => {
  return (
    <header>
        <h1 className='heading'>{heading}</h1>
        <p className='subheading'>{subHeading}</p>
    </header>
  )
}
