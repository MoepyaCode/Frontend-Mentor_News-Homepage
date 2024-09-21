import React from 'react'
import Logo from '@app-assets/logo.svg'

type Props = {
  data: string[]
}

export default function Desktop(props: Props) {
  const Data = [
    'Home',
    'New',
    'Popular',
    'Trending',
    'Categories',
  ]

  const renderNavItem = (value: string, key: number) => (
    <li key={key} className='body text-gunmetal hover:text-vermillion-light transition-colors duration-150 ease-in cursor-pointer'>{value}</li>
  )

  const renderContent = () => {
    return (
      <ul className='flex flex-row gap-10'>
        {Data.map(renderNavItem)}
      </ul>
    )
  }

  return (
    <nav className='flex justify-between items-center w-full max-w-[1110px]'>
        <img className='object-contain max-h-[40px]' src={Logo} alt="" />

        {renderContent()}
    </nav>
  )
}
