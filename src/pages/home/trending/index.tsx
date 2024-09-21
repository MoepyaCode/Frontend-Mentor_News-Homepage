import { Images } from '@app-assets/images'
import { Wrapper } from '@app-components'
import { title } from 'process'

export default function Trending() {
  type DataType = {
    title: string
    feed: string
    image: string
  }
  const Data: DataType[] = [
    {
      title: 'Reviving Retro PCs',
      feed: 'What happens when old PCs are given modern upgrades?',
      image: Images.retroPcs
    },
    {
      title: 'Top 10 Laptops of 2022',
      feed: 'Our best picks for various needs and budgets.',
      image: Images.topLaptops
    },
    {
      title: 'The Growth of Gaming',
      feed: 'How the pandemic has sparked fresh opportunities.',
      image: Images.gamingGrowth
    }
  ]

  const renderContent = (trend: DataType, key: number) => {
    return (
      <Wrapper key={key} className='flex flex-row flex-nowrap gap-6'>
        <img className='object-cover max-w-[100px] w-full max-h-[130px] h-full' src={trend.image} alt={trend.title} />

        <div className='flex flex-col'>
          <h2 className='mb-3 heading-m text-vermillion-light'>0{key + 1}</h2>

          <h3 className='mb-[9px] heading-xs text-blue-dark-space hover:text-vermillion-light transition-colors duration-150 ease-in cursor-pointer'>{trend.title}</h3>

          <p className='body text-gunmetal'>{trend.feed}</p>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper className='flex flex-col xl:flex-row gap-[30px]'>
      {Data.map(renderContent)}
    </Wrapper>
  )
}
