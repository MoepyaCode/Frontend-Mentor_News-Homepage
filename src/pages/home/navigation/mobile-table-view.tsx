import MenuIcon from '@app-assets/icons/icon-menu.svg'
import MenuIconClose from '@app-assets/icons/icon-menu-close.svg'
import Logo from '@app-assets/logo.svg'
import { ElementRef, useEffect, useRef, useState } from 'react'
import { Wrapper } from '@app-components'

type Props = {
  data: string[]
}

export default function MobileTableView(props: Props) {
  const modalRef = useRef<ElementRef<'dialog'>>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    console.log('isMenuOpen', isMenuOpen)
  }, [isMenuOpen])

  const renderNavItem = (value: string, key: number) => (
    <li key={key} className='text-[18px] leading-[24px] text-blue-dark-space'>{value}</li>
  )

  const renderDialogContent = () => (
    <dialog ref={modalRef}  className={`fixed bottom-0 min-w-full min-h-full bg-[rgba(0,0,26,.5)] flex justify-end items-center`}>
        <Wrapper className='relative min-h-screen bg-white-almost pt-[144px] px-[24px] flex flex-col'>
          <button className='absolute top-[27.3px] right-[20.8px]' onClick={handleToggle}>
            <img src={MenuIconClose} alt="" />
          </button>

          <ul className='min-w-[203px] flex flex-col gap-6'>
            {props.data.map(renderNavItem)}
          </ul>
        </Wrapper>
      </dialog>
  )

  return (
    <nav className='w-full max-w-[1110px] flex justify-between items-center'>
      <img className='max-h-[28px]' src={Logo} alt="Logo" />

      <button onClick={handleToggle}>
        <img src={MenuIcon} alt="" />
      </button>

      {isMenuOpen && renderDialogContent()}
    </nav>
  )
}