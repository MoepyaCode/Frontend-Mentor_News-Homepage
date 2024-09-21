import { Wrapper } from '@app-components'
import MobileImage from '@app-assets/images/image-web-3-mobile.jpg'
import DesktopImage from '@app-assets/images/image-web-3-desktop.jpg'
import { useDeviceType } from '@app-hooks'

export default function Introduction() {
  const DeviceType = useDeviceType()

  const renderImage = () => {
    if (DeviceType !== 'mobile') {
      return DesktopImage
    }
    return MobileImage
  }

  return (
    <Wrapper className='flex flex-col gap-6 md:gap-[28px]'>
      <img className='w-full object-cover max-h-[375px] sm:max-h-[300px]' src={renderImage()} alt="" />

      <Wrapper className='flex flex-col md:flex-row gap-4 md:gap-[30px]'>
        <h1 className='heading-l md:heading-xl font-extrabold text-blue-dark-space w-[80%] md:w-auto'>The Bright Future of Web 3.0?</h1>

        <Wrapper className='flex flex-col gap-6 justify-between'>
          <p className='body text-gunmetal'>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </p>

          <button className='min-w-[185px] min-h-[48px] bg-vermillion-light self-start font-bold text-[14px] leading-[24px] tracking-[4.38px] text-blue-dark-space hover:text-white-almost hover:bg-blue-dark-space transition-colors duration-150 ease-in'>
            READ MORE
          </button>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}
